import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const name = import.meta.env.VITE_NAME || 'Abhijit Mishra'
  const title = import.meta.env.VITE_TITLE || 'Full Stack Developer (MERN)'
  const location = import.meta.env.VITE_LOCATION || 'Bhubaneswar'
  const email = import.meta.env.VITE_EMAIL || 'abhijit@example.com'
  const linkedin = import.meta.env.VITE_LINKEDIN_URL
  const github = import.meta.env.VITE_GITHUB_URL

  const handleSocialClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 animate-glow cursor-pointer"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                <img 
                  src="/my-photo.jpg" 
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl font-bold text-white">${name.split(' ').map(n => n[0]).join('')}</div>`
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm <span className="text-gradient">{name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-4"
          >
            {title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 mb-8"
          >
            📍 {location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSocialClick(github)}
              className="text-3xl text-gray-300 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSocialClick(linkedin)}
              className="text-3xl text-gray-300 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={`mailto:${email}`}
                className="text-3xl text-gray-300 hover:text-primary transition-colors inline-block"
                aria-label="Send Email"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-primary rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
