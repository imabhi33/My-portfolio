import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaReact, FaNodeJs, FaGitAlt, FaPython, FaJava, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql, SiAndroidstudio, SiJavascript, SiPostman, SiJira, SiSupabase, SiSocketdotio } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'JavaScript (ES6+)', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Shadcn UI', icon: <FaCode />, color: '#ffffff' },
      ],
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
        { name: 'WebSocket', icon: <SiSocketdotio />, color: '#010101' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: '💾',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Jira', icon: <SiJira />, color: '#0052CC' },
        { name: 'Android Studio', icon: <SiAndroidstudio />, color: '#3DDC84' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className="card-gradient p-6 rounded-xl border border-slate-700/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-slate-600/50 transition-all cursor-pointer group"
                    >
                      <div 
                        className="text-2xl transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <div className="card-gradient p-6 rounded-xl border border-slate-700/50">
              <h3 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
                <span>📋</span>
                <span>Additional Competencies</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  
                  'JSON',
                  'Vite',
                  
                  'Agile/Scrum',
                  'SQLite',
                  'Payment Integration',
                  'Redux',
                  'JWT Authentication',
                  'API Development',
                  
                  'Responsive Design'
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 hover:border-primary/40 rounded-md text-xs text-gray-400 hover:text-gray-200 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
