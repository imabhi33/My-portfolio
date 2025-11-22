import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaGithub, FaExternalLinkAlt, FaRobot, FaUsers } from 'react-icons/fa'
import { MdSportsCricket } from 'react-icons/md'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = [
    {
      title: 'SmartCric',
      icon: <MdSportsCricket className="text-4xl" />,
      description: 'Live Cricket Scorecard & Match Management System - A comprehensive, real-time cricket scoring platform built with the MERN stack, enabling match creators to conduct live cricket matches with professional-grade scorekeeping and public viewing capabilities.',
      features: [
        'Real-time ball-by-ball scoring with automatic strike rotation',
        'Role-based access control (Admin, Match Creator, Public Viewer)',
        'Live statistics: batting, bowling, partnerships, and commentary',
        'Auto-refreshing live match view with 3-second intervals',
        'JWT authentication with secure password hashing',
        'Complex state management for innings transitions and wickets',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT'],
      gradient: 'from-green-500 to-emerald-600',
      githubUrl: import.meta.env.VITE_PROJECT_SMARTCRIC_GITHUB_URL,
      liveUrl: import.meta.env.VITE_PROJECT_SMARTCRIC_LIVE_URL,
    },
    {
      title: 'Professional Portfolio Website',
      icon: <FaRobot className="text-4xl" />,
      description: 'A modern, high-performance portfolio website built with React and Vite, featuring smooth animations, real email integration, and professional design.',
      features: [
        'React 19 with Vite for lightning-fast performance',
        'Tailwind CSS for responsive, modern design',
        'Framer Motion for smooth animations',
        'EmailJS integration for contact form',
        'Optimized performance with 60 FPS animations',
      ],
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
      gradient: 'from-purple-500 to-pink-500',
      githubUrl: import.meta.env.VITE_PROJECT_PORTFOLIO_GITHUB_URL,
      liveUrl: import.meta.env.VITE_PROJECT_PORTFOLIO_LIVE_URL,
    },
    {
      title: 'Ecart - AI Generated',
      icon: <FaRobot className="text-4xl" />,
      description: 'A full-stack e-commerce application allowing users to input text prompts to generate unique product designs via integrated AI/ML API (DALL-E/Stable Diffusion).',
      features: [
        'React frontend with interactive design canvas',
        'Node.js backend for AI prompt processing',
        'Stripe payment gateway integration',
        'MongoDB schema for user profiles and design tracking',
        'Real-time order tracking and manufacturing workflow',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'AI/ML API'],
      gradient: 'from-blue-500 to-purple-500',
      githubUrl: import.meta.env.VITE_PROJECT1_GITHUB_URL,
      liveUrl: import.meta.env.VITE_PROJECT1_LIVE_URL,
    },
    {
      title: 'Employee Management Application',
      icon: <FaUsers className="text-4xl" />,
      description: 'Android application designed to streamline employee management processes with dual login modules for Admin and Employee roles.',
      features: [
        'Admin dashboard for employee management',
        'Employee portal for leave requests',
        'Salary slip generation and viewing',
        'Working hours tracking system',
        'SQLite database for offline functionality',
      ],
      technologies: ['Android Studio', 'Java', 'SQLite', 'XML'],
      gradient: 'from-green-500 to-teal-500',
      githubUrl: import.meta.env.VITE_PROJECT2_GITHUB_URL,
      liveUrl: import.meta.env.VITE_PROJECT2_LIVE_URL,
    },
  ]

  const handleLinkClick = (url) => {
    if (url && url !== '' && url !== 'your_url_here') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="card-gradient p-8 rounded-2xl border border-primary/20 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className={`inline-block p-4 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 text-white`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-primary">Key Features:</h4>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0"></div>
                      <p className="text-sm text-gray-400">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800/50 border border-primary/20 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLinkClick(project.githubUrl)}
                      className="flex items-center space-x-2 px-4 py-2 bg-primary/20 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-all cursor-pointer"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.button>
                  )}
                  {project.liveUrl && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLinkClick(project.liveUrl)}
                      className="flex items-center space-x-2 px-4 py-2 bg-secondary/20 border border-secondary rounded-lg text-secondary hover:bg-secondary hover:text-white transition-all cursor-pointer"
                    >
                      <FaExternalLinkAlt />
                      <span>Demo</span>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
