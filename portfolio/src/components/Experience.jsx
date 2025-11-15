import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const experience = {
    company: 'Ishvara Tech',
    position: 'Full Stack Developer (MERN)',
    period: 'March 2025 – Present',
    responsibilities: [
      'Architectural design and development of a full-stack, unified ad campaign platform, resulting in a 40% reduction in total deployment time through streamlined MERN stack configuration and containerization strategies',
      'Engineered and optimized core backend queuing logic in Node.js for high-volume campaign execution, successfully reducing campaign delivery time by 65% and ensuring continuous platform reliability with 99.9% uptime',
      'Developed a key multi-tenant module for social media advertising, providing a unified dashboard for managing campaigns across multiple external platforms (e.g., LinkedIn/X/Meta)',
      'Managed the end-to-end development lifecycle for critical features, from technical architecture decisions and implementation to production deployment and monitoring',
      'Collaborated directly with Design and DevOps teams to translate complex business requirements into high-quality, responsive user interfaces using React and modern styling frameworks',
    ],
  }

  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Professional <span className="text-gradient">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card-gradient p-8 rounded-2xl border border-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <FaBriefcase className="text-2xl text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">{experience.position}</h3>
                  <p className="text-xl text-primary font-semibold">{experience.company}</p>
                  <div className="flex items-center space-x-2 text-gray-400 mt-2">
                    <FaCalendar />
                    <span>{experience.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {experience.responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'MongoDB', 'Express', 'LinkedIn API', 'X API', 'Git/GitHub'].map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
