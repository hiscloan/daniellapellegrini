import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroImg from '../assets/hero2.jpg' 

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])
  

  return (
    
    <main className="text-gray-900 w-full">
      {/* Hero Section */}
      <div className="min-h-screen text-gray-900 p-6">

      
        <section className="p-6">
          <img src={heroImg} alt="Voice Over Artist" className="rounded-xl mb-6" />
        </section>

        <section className="w-full py-5 text-center" data-aos="fade-down">
          <h1 className="text-6xl font-extrabold text-blue-950">
            Voice with Impact
          </h1>
          <p className="mt-4 text-xl text-gray-800">Professional voiceover that speaks to your brand.</p>
        </section>
      
      </div>
      
    </main>
  )
}
