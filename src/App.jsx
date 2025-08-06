
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Demos from './pages/Demos';
import Terms from './pages/Terms';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>

  )
}

export default App
