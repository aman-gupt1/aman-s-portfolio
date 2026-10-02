import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { TechStack } from '../sections/TechStack';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { Education } from '../sections/Education';
import { Contact } from '../sections/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};
