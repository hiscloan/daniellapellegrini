// src/components/ContactForm.jsx
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
   e.preventDefault();
    
   const formData = new FormData(e.target);
    
   const res = await fetch('/contact.php', {
     method: 'POST',
     body: formData
   });
  
   const text = await res.text();
   alert(text); // Show result from PHP
  };


  return (
    <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto px-4 sm:px-6 lg:px-12">
    <form method="POST" action="/contact.php" className="bg-gray-100 p-6 rounded-xl shadow-md space-y-5 flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        className= "w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
        required
      />
      <button
        type="submit"
        className="w-full text-white bg-blue-950 py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        Send Message
      </button>
    </form>
    </div>
  )
}