// src/pages/Terms.jsx
import ContactForm from '../components/ContactForm'

export default function Terms() {
  return (
    <div className=" text-gray-900">
      <h1 className="text-5xl font-extrabold mb-4 text-center text-blue-950 mb-15 mt-10" data-aos="fade-down">Terms & Conditions</h1>
      <section className="prose prose-lg text-gray-800 max-w-3xl mx-auto mb-12 bg-orange-50 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl" data-aos="fade-up" data-aos-delay="100">
        

        <ul className="list-disc pl-6 space-y-3 text-lg" data-aos="fade-up" data-aos-delay="100">
          <li data-aos="zoom-in" className=" p-4">Rates are quoted based on script length and usage type (e.g., commercial, internal, etc).</li>
          <li data-aos="zoom-in" className=" p-4">Payment is due within 7 days of invoice, unless otherwise agreed.</li>
          <li data-aos="zoom-in" className=" p-4">Revisions are limited to two rounds per project. Additional edits may incur extra fees.</li>
          <li data-aos="zoom-in" className=" p-4">Final audio files are delivered in WAV or MP3 format via email or direct download.</li>
          <li data-aos="zoom-in" className=" p-4">Usage rights are non-exclusive unless otherwise specified. Broadcast rights require separate licensing.</li>
          <li data-aos="zoom-in" className=" p-4">Typical turnaround time is 48-72 hours, excluding weekends and holidays.</li>
          <li data-aos="zoom-in" className=" p-4">Rush delivery may be available upon request, subject to availability and added cost.</li>
          <li data-aos="zoom-in" className=" p-4">Cancellations after recording may be subject to partial payment for time and resources used.</li>
        </ul>
      </section>

    </div>
  )
}