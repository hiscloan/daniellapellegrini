import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Landing from './pages/Landing.jsx'
import About from './pages/About.jsx'
import Terms from './pages/Terms.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Demos from './pages/Demos.jsx'
import Navbar from './components/Navbar.jsx'
import Inquire from './pages/Inquire.jsx'

AOS.init({
  duration: 1000,
  once: true,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/inquire" element={<Inquire />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  </StrictMode>,
)
