import React from 'react';
import backgroundImage from '../assets/25th_crab.jpg';
import avatar from '../assets/avatar2.png';

function Hero() {
  return (
    <section id='home' className="relative h-screen flex flex-col items-center justify-center text-starlight font-heading overflow-hidden">
      {/* Rotating Background */}
      <div
        className="absolute inset-0 animate-slow-rotate"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'top 45% left 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          scale:2.4,
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-900 to-purple-800 opacity-80"></div>

      {/* Astronaut Avatar */}
      <div className="absolute bottom-8 right-8 z-10">
        <img
          src={avatar}
          alt="Astronaut Avatar"
          className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-lg"
        />
      </div>

      {/* Heading */}
      <div className="relative z-20 text-center px-4 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug tracking-wide mb-6">
          Embark on a Journey Through My{' '}
          <span className="text-purple-400">Digital Cosmos</span>
        </h1>
        <p className="font-newGen text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          <span className="text-lime-400">
            Discover my projects, skills, and passion for technology
          </span>{' '}
          as we explore the infinite possibilities of the digital universe
          together.
        </p>
      </div>

      {/* Buttons */}
      <div className="relative z-20 flex gap-6 mt-8">
        <button className="bg-purple-500 text-white px-8 py-3 rounded-full hover:scale-110 hover:shadow-md hover:bg-white/20 transition-transform duration-300">
          Explore
        </button>
        <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-purple-500 hover:text-lime-400 hover:shadow-lg transition-transform duration-300">
          Contact
        </button>
      </div>
    </section>
  );
}

export default Hero;