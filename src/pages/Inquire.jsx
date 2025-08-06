import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ContactForm from '../components/ContactForm'

export default function Inquire() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <main className="text-gray-900 py-16 px-6">
        <h1 className="text-5xl font-extrabold text-center mb-12 a text-blue-950" data-aos="fade-down" data-aos-delay="100">Inquire</h1>

        <section id="contact" className="py-8 px-4 sm:px-8" data-aos="fade-up" data-aos-delay="100">
            <ContactForm />
        </section>
    </main>
  )
}
