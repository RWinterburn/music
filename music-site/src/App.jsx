import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Content from './components/Content';
import './App.css'


function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <Background />
      <div className="app-container">
      
        {/* Persistent background */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
           
      </div>
      
    </Router>
  );
}

export default App;

