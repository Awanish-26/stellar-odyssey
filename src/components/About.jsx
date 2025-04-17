import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import me from '../assets/me.png';
import me2 from '../assets/me.jpeg';
import resume from '../assets/Internship Resume.pdf';
const About = forwardRef((props, ref) => {
  return (
    <section
      id="about"
      ref={ref}
      className="sm:h-screen text-starlight py-20 px-6 md:px-20 font-body bg-gradient-to-b from-gray-900/25 via-gray-800/50 to-gray-900"
    >
      <motion.h2
        className="text-4xl font-heading mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Astronaut
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="text-4xl font-heading mb-4 text-center md:text-left hidden sm:block relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={me}
            alt="Profile"
            className="rounded-full border-2 border-sky-500 w-full"
          />
          <img
            src={me2}
            alt="Profile Hover"
            className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-sky-500 opacity-0 transition-opacity duration-1000 hover:opacity-100"
          />
        </motion.div>

        <motion.div
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4">
            Hello traveler! I'm{' '}
            <span className="text-violet-500 font-semibold">[Awanish]</span>, a
            passionate frontend developer and cosmic dreamer. I craft digital
            experiences as infinite and beautiful as the galaxies we admire.
          </p>
          <p className="mb-4">
            With a heart full of curiosity and a mind wired for clean, aesthetic
            code, I specialize in building responsive, user-friendly interfaces
            that feel like home in every corner of the web universe.
          </p>
          <p>
            When I'm not coding or stargazing, you'll find me sketching nebulae,
            chasing auroras, or perfecting my next CSS constellation ✨.
          </p>
          <a
            href={resume}
            download="Awanish_Resume"
            className="mt-6 inline-flex items-center px-6 py-3 bg-violet-500 text-white rounded-lg shadow-lg hover:bg-violet-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default About