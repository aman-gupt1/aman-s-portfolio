import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Contact from '../models/Contact.js';
import { getDBStatus } from '../config/db.js';
import { sendContactNotification } from '../services/emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backupFilePath = path.join(__dirname, '../../data/messages.json');

// Ensure data folder exists
const ensureDataDir = () => {
  const dir = path.dirname(backupFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(backupFilePath)) {
    fs.writeFileSync(backupFilePath, JSON.stringify([], null, 2), 'utf-8');
  }
};

const saveToFallbackStore = (contactData) => {
  try {
    ensureDataDir();
    const raw = fs.readFileSync(backupFilePath, 'utf-8');
    const list = JSON.parse(raw || '[]');
    const record = {
      _id: 'local_' + Date.now(),
      ...contactData,
      createdAt: new Date().toISOString(),
    };
    list.unshift(record);
    fs.writeFileSync(backupFilePath, JSON.stringify(list, null, 2), 'utf-8');
    return record;
  } catch (err) {
    console.error('Fallback store write error:', err);
    return {
      _id: 'local_' + Date.now(),
      ...contactData,
      createdAt: new Date().toISOString(),
    };
  }
};

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Server-side validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required',
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required',
      });
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message cannot be empty',
      });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters long',
      });
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || 'Portfolio Inquiry',
      message: message.trim(),
    };

    let savedContact;
    const isDBActive = getDBStatus();

    if (isDBActive) {
      savedContact = await Contact.create(payload);
    } else {
      // Gracefully persist to JSON file store
      savedContact = saveToFallbackStore(payload);
    }

    // Trigger email notification to Aman's Gmail
    let mailResult = { sent: false };
    try {
      mailResult = await sendContactNotification(payload);
    } catch (mailErr) {
      console.error('Email dispatch error:', mailErr);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received.',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        createdAt: savedContact.createdAt,
      },
      emailSent: mailResult.sent,
      emailError: mailResult.sent ? null : (mailResult.error || mailResult.reason || 'Unknown error'),
    });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    const isDBActive = getDBStatus();
    if (isDBActive) {
      const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
      return res.status(200).json({
        success: true,
        count: contacts.length,
        data: contacts,
      });
    } else {
      ensureDataDir();
      const raw = fs.readFileSync(backupFilePath, 'utf-8');
      const list = JSON.parse(raw || '[]');
      return res.status(200).json({
        success: true,
        count: list.length,
        data: list,
      });
    }
  } catch (error) {
    next(error);
  }
};
