import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="flex justify-between items-center p-6 bg-space text-starlight">
      <div className="flex gap-4">
        <a href="mailto:awanishyadav996@gmail.com"><SiGmail size={24} /></a>
        <a href="https://github.com/Awanish-26"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/awanish-yadav/"><FaLinkedin size={24} /></a>
        <a href="https://x.com/Awanish___Yadav"><FaTwitter size={24} /></a>

      </div>
      <p className="text-cosmic">Made with stardust & code ✨</p>
    </footer>
  )
}

export default Footer