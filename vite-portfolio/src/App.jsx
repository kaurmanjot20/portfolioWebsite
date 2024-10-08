import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Personal from './Components/Personal'; // Import Personal component
import Stack from './Components/Stack';
import Home from './Components/Home'; // Import Home component
import Hackathon from './Components/Hackathon'
import ContactForm from './Components/ContactForm';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
