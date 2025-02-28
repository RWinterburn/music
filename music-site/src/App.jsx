import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Content from './components/Content';
import './App.css'
import SpotifySingles from './components/SpotifySingles';


function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      
      <div className="app-container">
      
        {/* Persistent background */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singles" element={<SpotifySingles />} />
        </Routes>
        <Background />
      </div>
      
    </Router>
  );
}

export default App;

