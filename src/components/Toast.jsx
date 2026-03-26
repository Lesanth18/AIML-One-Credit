import { useEffect } from 'react'

export default function Toast({ message, duration, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div className="fixed bottom-8 left-8 card-glass px-6 py-4 rounded text-dark-text text-sm font-mono animate-[slideInLeft_0.4s_ease] max-w-xs">
      {message}
    </div>
  )
}
