import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (e.target.matches('a, button, .chip, .tag, .cert-card')) {
        setIsActive(true)
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.matches('a, button, .chip, .tag, .cert-card')) {
        setIsActive(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full transition-all duration-150 ${
        isActive
          ? 'w-[30px] h-[30px] shadow-lg shadow-accent-cyan/80'
          : 'w-3 h-3 shadow-lg shadow-accent-cyan/60'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgb(0, 245, 255), rgb(157, 0, 255))'
      }}
    />
  )
}
