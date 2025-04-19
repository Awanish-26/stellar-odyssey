import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'

function Contact() {
  const [state, handleSubmit] = useForm("xjkkjaeg");
  if (state.succeeded) {
    window.alert("Message sent successfully!")
  }
  return (
    <section id="contact" className="bg-rose-500/10 text-starlight py-20 px-6 md:px-20 font-body relative">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-space to-black opacity-50 z-0"></div>

      <motion.h2 
        className="text-4xl font-heading mb-12 text-center relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect Across the Cosmos
      </motion.h2>

      <motion.form onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-6 relative z-10 bg-space p-8 rounded-lg shadow-2xl border border-purple/50"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <input 
          type="text" 
          placeholder="Your Name" 
          className="p-4 bg-transparent border border-violet-500 rounded-lg text-starlight focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
        />
        <input 
        id="email"
        name="email"
          type="email" 
          placeholder="Your Email" 
          className="p-4 bg-transparent border border-violet-500 rounded-lg text-starlight focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
        />
        <textarea 
          id="message"
          name="message"
          rows="5" 
          placeholder="Your Message" 
          className="p-4 bg-transparent border border-violet-500 rounded-lg text-starlight focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
        ></textarea>
        <button 
          type="submit" 
          className="flex items-center gap-3 bg-gradient-to-r from-violet-500 to-indigo-500 text-starlight px-6 py-3 rounded-full hover:scale-110 transition w-fit mx-auto shadow-lg hover:shadow-violet-500/50"
          disabled={state.submitting}>
          Send Message <FaPaperPlane />
        </button>
      </motion.form>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    </section>
  )
}

export default Contact
