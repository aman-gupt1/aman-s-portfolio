import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFC]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
