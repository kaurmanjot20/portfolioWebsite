import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Stack from './Components/Stack';
import Home from './Components/Home'; // Import Home component

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flexGrow: 1, textAlign: 'center', padding: '20px' }}>
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
