import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Demos() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const demos = [
    {
      category: 'Commercial',
      description: 'Energetic and clear delivery for ad campaigns.',
      audioUrl: '/audio/Daniella_Pellegrini_HardSell.mp3',
    },
    {
      category: 'Narration',
      description: 'Warm tone suited for documentaries and explainer videos.',
      audioUrl: '/audio/Daniella_Pellegrini_Conversational.mp3',
    },
    {
      category: 'Character',
      description: 'Animated voices for games, podcasts, and storytelling.',
      audioUrl: '/audio/Daniella_character.mp3',
    },
    {
      category: 'Coporate',
      description: 'Professional and engaging for corporate presentations.',
      audioUrl: '/audio/DaniellaPellegrini_Coporate.mp3',
    },
      {
      category: 'Product',
      description: 'Engaging voice for product promotions and launches.',
      audioUrl: '/audio/DaniellaPellegrini_SoftSell.mp3',
    },
      {
      category: 'Presenter',
      description: 'Dynamic and clear for live events and shows.',
      audioUrl: '/audio/DaniellaPellegrini_Skill_Presenter.mp3',
    },
  ]

  return (
    
    <main className="text-gray-900 py-16 px-6">

      <h1 className="text-5xl font-extrabold text-center mb-12 a text-blue-950" data-aos="fade-down">
        Demo Reels
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {demos.map((demo, index) => (
          <div
            key={demo.category}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 justify-center items-center flex flex-col"
          >
            <h3 className="text-xl font-semibold text-blue-950 mb-2 text-center">{demo.category}</h3>
            <p className="text-gray-700 mb-4 text-center">{demo.description}</p>
            <audio controls src={demo.audioUrl} className="w-full rounded">
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </main>
  )
}