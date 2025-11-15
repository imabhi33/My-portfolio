import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Dedicated Full Stack MERN Developer with hands-on experience in building and deploying 
                scalable, high-performance web applications. Currently leveraging expertise in React.js, 
                Node.js, Express, and MongoDB at <span className="text-primary font-semibold">Ishvara Tech</span> to 
                deliver solutions in the Business Intelligence and Marketing Automation domains.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Proven ability to contribute across the stack, quickly adapt to new technologies, and 
                drive innovative self-projects like <span className="text-secondary font-semibold">Ecart - AI Generated</span>. 
                Seeking to utilize full-stack proficiency to deliver impactful results.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="card-gradient p-4 rounded-lg border border-primary/20">
                  <p className="text-3xl font-bold text-primary">1</p>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="card-gradient p-4 rounded-lg border border-secondary/20">
                  <p className="text-3xl font-bold text-secondary">5+</p>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="card-gradient p-4 rounded-lg border border-pink-500/20">
                  <p className="text-3xl font-bold text-pink-500">99.9%</p>
                  <p className="text-sm text-gray-400">Uptime Maintained</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="card-gradient p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-gradient">What I Do</h3>
                <div className="space-y-4">
                  {[
                    { icon: '🎨', title: 'Frontend Development', desc: 'Building responsive and interactive UIs with React.js' },
                    { icon: '⚙️', title: 'Backend Development', desc: 'Creating robust APIs with Node.js and Express' },
                    { icon: '💾', title: 'Database Design', desc: 'Designing efficient MongoDB schemas and queries' },
                    { icon: '🚀', title: 'Full Stack Solutions', desc: 'End-to-end application development and deployment' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-800/30 transition-all"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
