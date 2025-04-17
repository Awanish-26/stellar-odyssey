import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen(!navOpen)

  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  return (
    <motion.nav
      className="fixed top-0 w-full bg-cover text-starlight flex justify-between items-center p-4 px-6 z-50 shadow-lg font-heading backdrop-blur-md bg-opacity-60 bg-white/10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-2xl text-violet-600 font-bold">Stellar Odyssey</div>

      <div className="hidden md:flex gap-8">
        {navLinks.map((link, index) => (  
          <a  key={index}  href={`#${link.toLowerCase()}`}  className="group relative overflow-hidden">
          <span>{link}</span>
          <span className="comet absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"></span>
        </a>
        ))}
      </div>

      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleNav}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {navOpen && (
        <motion.div
          className="absolute top-16 right-4 backdrop-blur-md bg-opacity-60 bg-white/10 text-starlight rounded-lg p-6 flex flex-col gap-6 shadow-xl md:hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {navLinks.map((link, index) => (
            <a  key={index}  href={`#${link.toLowerCase()}`}  onClick={toggleNav}  className="group relative overflow-hidden">   
              <span>{link}</span>
          <span className="comet absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"></span>
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
