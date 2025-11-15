import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const formRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const email = import.meta.env.VITE_EMAIL || 'abhijit@example.com'
  const phone = import.meta.env.VITE_PHONE || '+91-XXXXXXXXXX'
  const location = import.meta.env.VITE_LOCATION || 'Bhubaneswar'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your .env file.')
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )

      setStatus({ 
        type: 'success', 
        message: '✅ Message sent successfully! I will get back to you soon.' 
      })
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({ 
        type: 'error', 
        message: '❌ Failed to send message. Please try emailing me directly.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: email, link: `mailto:${email}` },
    { icon: <FaPhone />, label: 'Phone', value: phone, link: `tel:${phone}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: location, link: null },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="card-gradient p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="p-3 bg-primary/20 rounded-lg text-primary text-xl">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="card-gradient p-8 rounded-2xl border border-secondary/20">
                <h3 className="text-xl font-bold mb-4 text-white">Let's Connect!</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm currently available for freelance work and full-time opportunities. 
                  If you have a project that you want to get started or think you need my help with something, 
                  then get in touch.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="card-gradient p-8 rounded-2xl border border-primary/20">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows="5"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-primary/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane />
                      </>
                    )}
                  </motion.button>

                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center justify-center space-x-2 p-3 rounded-lg ${
                        status.type === 'success' 
                          ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                          : 'bg-red-500/20 border border-red-500/50 text-red-400'
                      }`}
                    >
                      {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                      <span className="text-sm">{status.message}</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
