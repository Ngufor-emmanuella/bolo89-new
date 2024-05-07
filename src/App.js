import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Career from './pages/Career';
import Gallery from './pages/Gallery';
import Uploadresume from './pages/Uploadresume';
import Contact from './pages/Contact';
import Bookoffice from './pages/Bookoffice';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Uploadresume" element={<Uploadresume />} />
          <Route path="/bookoffice" element={<Bookoffice />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
