import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaFigma, FaCode, FaRobot, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss ,SiC, SiFlask ,SiPython,SiDjango, SiBootstrap, SiSupabase } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-400' },
  { icon: <FaJsSquare />, name: 'JavaScript', color: 'text-yellow-400' },
  { icon: <FaReact />, name: 'React', color: 'text-cyan-400' },
  { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-400' },
  { icon: <FaFigma />, name: 'Figma', color: 'text-pink-400' },
  { icon: <SiPython />, name: 'Python', color: 'text-blue-500' },
  { icon: <SiDjango />, name: 'Django', color: 'text-green-600' },
  { icon: <SiFlask />, name: 'Flask', color: 'text-gray-500' },
  { icon: <SiC />, name: 'C', color: 'text-purple-500' },
  { icon: <SiTailwindcss />, name: 'TailwindCSS', color: 'text-teal-400' },
  { icon: <FaGitAlt />, name: 'Git', color: 'text-orange-600' },
  { icon: <FaRobot />, name: 'ChatGPT', color: 'text-green-500' },
  { icon: <SiBootstrap />, name: 'Bootstrap', color: 'text-purple-500' },
  { icon: <SiSupabase />, name: 'Supabase', color: 'text-green-500' }
]

function Skills() {
  return (
    <section className="bg-space text-starlight py-20 px-6 md:px-20 font-body">
      <motion.h2 
        className="text-4xl font-heading mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Galactic Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center bg-nebula p-6 rounded-lg shadow-lg hover:scale-110 transition cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`text-5xl mb-3 ${skill.color}`}>{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
