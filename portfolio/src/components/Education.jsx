import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaGraduationCap, FaCalendar, FaUniversity } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Centurion University',
      period: '2022 – 2024',
      score: '8.5 CGPA',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      degree: 'Bachelor of Science (BSc)',
      institution: 'Utkal University',
      period: '2018 – 2022',
      score: '7.2 CGPA',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'Higher Secondary (12th)',
      institution: 'Utkal University',
      period: '2017 – 2019',
      score: '72%',
      gradient: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient">Education</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="card-gradient p-8 rounded-2xl border border-primary/20 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-60 h-60 bg-gradient-to-br ${edu.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-4 bg-gradient-to-br ${edu.gradient} rounded-xl text-white flex-shrink-0`}>
                      <FaGraduationCap className="text-3xl" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <div className="flex items-center space-x-2 text-gray-300 mb-2">
                        <FaUniversity className="text-primary" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <FaCalendar className="text-secondary" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className={`px-6 py-4 bg-gradient-to-br ${edu.gradient} rounded-xl text-center`}>
                      <p className="text-3xl font-bold text-white">{edu.score}</p>
                      <p className="text-sm text-white/80">Score</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>
      </div>
    </section>
  )
}

export default Education
