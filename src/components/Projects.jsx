import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'

const projects = [
  {
    title: "Ferti Smart",
    description: "A utility app for framers to pridict the growth of Crops",
    image: project1,
    live: "https://github.com/Awanish-26/fertiSmart",
    repo: "https://github.com/Awanish-26/fertiSmart"
  },
  {
    title: "Vishwas Sweets",
    description: "A wonderful and attractive ui of nearby shop with delicious cuisine and sweets",
    image: project2,
    live: "https://awanish-26.github.io/Tailwind/",
    repo: "https://github.com/Awanish-26/Tailwind"
  },
  {
    title: "Inverse Visualizer",
    description: "A real-time  visualization tool powered by rainmeter",
    image: project3,
    live: "https://www.deviantart.com/bablu0026/art/Inverse-visualizer-1-0-1184264403",
    repo: "https://github.com/Awanish-26/Rainmeter-visualizer"
  }
]

function Projects() {
  return (
    <section id="projects" className="bg-transparent bg-[url(src/assets/project_background.png)] bg-cover text-starlight py-20 px-6 md:px-20 font-body">
      <motion.h2 
        className="text-4xl font-heading mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Cosmic Creations
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-transparent p-6 rounded-xl shadow-lg flex flex-col"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="h-48 object-cover rounded-lg mb-4 border-2 border-violet-500"
            />
            <h3 className="text-2xl font-heading mb-2">{project.title}</h3>
            <p className="text-cosmic mb-4">{project.description}</p>
            <div className="flex gap-4 mt-auto">
              <a href={project.live} target="_blank" rel="noreferrer" className="bg-violet-500 text-starlight px-4 py-2 rounded-full hover:scale-105 transition flex items-center gap-2">
                Live <FaExternalLinkAlt />
              </a>
              <a href={project.repo} target="_blank" rel="noreferrer" className="border border-starlight px-4 py-2 rounded-full hover:bg-violet-500 hover:text-space flex items-center gap-2">
                Code <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
