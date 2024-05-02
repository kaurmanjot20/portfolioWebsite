// Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <h1>Manjot Kaur</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stack">Tech Stack</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  )
}
