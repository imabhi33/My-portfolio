import { useEffect, useRef } from 'react'

const ParticlesBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Professional code snippets
    const codeSnippets = [
      'const app = express()',
      'React.useState()',
      'MongoDB.connect()',
      'async/await',
      'npm install',
      'git commit',
      'docker build',
      'API.get()',
      'JWT.verify()',
      'socket.io',
      'Node.js',
      'MERN Stack',
      'CI/CD',
      'REST API',
      'GraphQL',
      'TypeScript',
      'Tailwind',
      'Vite',
    ]

    class CodeParticle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
        this.opacity = Math.random() * 0.5 + 0.3
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = -20
        this.speed = Math.random() * 0.5 + 0.2
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        this.fontSize = Math.random() * 8 + 10
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        this.y += this.speed
        if (this.y > canvas.height + 20) {
          this.reset()
        }
      }

      draw() {
        ctx.font = `${this.fontSize}px 'Courier New', monospace`
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`
        ctx.fillText(this.text, this.x, this.y)
      }
    }

    // Create particles
    const particles = []
    const particleCount = 25

    for (let i = 0; i < particleCount; i++) {
      particles.push(new CodeParticle())
    }

    // Grid lines
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.03)'
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    let animationFrameId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      drawGrid()
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  )
}

export default ParticlesBackground
