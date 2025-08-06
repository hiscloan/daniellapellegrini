// src/components/AudioPlayer.jsx
import { useState, useRef } from 'react'

export default function AudioPlayer({ src, label }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="bg-gray-100 rounded-lg shadow p-4 flex items-center space-x-4 mb-4">
      <button
        onClick={togglePlay}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <p className="flex-grow">{label || 'Audio Sample'}</p>
      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  )
}