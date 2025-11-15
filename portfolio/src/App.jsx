import { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticlesBackground from './components/ParticlesBackground'

// Lazy load components that are below the fold
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500) // Reduced to 500ms
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-darker">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gradient font-bold">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-screen" />}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
