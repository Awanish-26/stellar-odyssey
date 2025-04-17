import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Starfield from './components/StarField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const sections = [heroRef, aboutRef, projectsRef, skillsRef, contactRef]

    sections.forEach((section) => {
      if (section.current) {
        gsap.fromTo(
          section.current,
          { opacity: 0.2, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section.current,
              start: 'top 70%',
              end: 'top 20%',
              scrub: 1,
              // markers: true,
            },
          }
        )
      }
    })
  }, [])

  return (
    <div className="font-body bg-transparent">
      <Starfield />
      <Navbar />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  )
}

export default App
