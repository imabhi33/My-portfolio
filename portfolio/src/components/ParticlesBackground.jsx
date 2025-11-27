import { useEffect, useRef } from 'react'

const ParticlesBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const mouse = {
      x: null,
      y: null,
      radius: 150
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const handleMouseMove = (event) => {
      mouse.x = event.x
      mouse.y = event.y
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.baseSize = size
        this.color = color
        this.density = (Math.random() * 30) + 1
        this.angle = Math.random() * 360
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.shadowBlur = 0 // Reset for performance
      }

      update() {
        // Mouse interaction (Repulsion)
        if (mouse.x != null) {
          let dx = mouse.x - this.x
          let dy = mouse.y - this.y
          let distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouse.radius - distance) / mouse.radius
            const directionX = forceDirectionX * force * this.density
            const directionY = forceDirectionY * force * this.density

            this.x -= directionX
            this.y -= directionY
          }
        }

        // Floating movement
        this.x += this.directionX * 0.5
        this.y += this.directionY * 0.5

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY
        }

        // Pulse size
        this.angle += 0.05
        this.size = this.baseSize + Math.sin(this.angle) * 0.5

        this.draw()
      }
    }

    function init() {
      particles = []
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const numberOfParticles = (canvas.height * canvas.width) / 12000

      // Premium color palette (Blue, Purple, Pink, Indigo)
      const colors = [
        'rgba(59, 130, 246, 0.8)', // Blue-500
        'rgba(147, 51, 234, 0.8)', // Purple-600
        'rgba(236, 72, 153, 0.8)', // Pink-500
        'rgba(99, 102, 241, 0.8)'  // Indigo-500
      ]

      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2)
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2)
        let directionX = (Math.random() * 2) - 1
        let directionY = (Math.random() * 2) - 1
        let color = colors[Math.floor(Math.random() * colors.length)]

        particles.push(new Particle(x, y, directionX, directionY, size, color))
      }
    }

    function connect() {
      let opacityValue = 1
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
            + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y))

          if (distance < (canvas.width / 7) * (canvas.height / 7) && distance < 20000) {
            opacityValue = 1 - (distance / 20000)
            ctx.strokeStyle = 'rgba(148, 163, 184,' + opacityValue * 0.1 + ')' // Slate-400 with very low opacity
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, innerWidth, innerHeight)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
      }
      connect()
    }

    init()
    animate()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}

export default ParticlesBackground
