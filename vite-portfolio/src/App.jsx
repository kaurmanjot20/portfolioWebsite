import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Stack from './Components/Stack';
import Home from './Components/Home'; // Import Home component

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stack" element={<Stack />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
