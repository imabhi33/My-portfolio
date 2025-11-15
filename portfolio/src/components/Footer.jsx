import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const name = import.meta.env.VITE_NAME || 'Abhijit Mishra'
  const linkedin = import.meta.env.VITE_LINKEDIN_URL
  const github = import.meta.env.VITE_GITHUB_URL
  const twitter = import.meta.env.VITE_TWITTER_URL

  const handleSocialClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="bg-darker border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">AM</h3>
            <p className="text-gray-400">
              Full Stack MERN Developer passionate about building innovative web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSocialClick(github)}
                className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-primary hover:bg-slate-700 transition-all"
              >
                <FaGithub className="text-xl" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSocialClick(linkedin)}
                className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-primary hover:bg-slate-700 transition-all"
              >
                <FaLinkedin className="text-xl" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSocialClick(twitter)}
                className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-primary hover:bg-slate-700 transition-all"
              >
                <FaTwitter className="text-xl" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} {name}.</span>
            
            <span></span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
