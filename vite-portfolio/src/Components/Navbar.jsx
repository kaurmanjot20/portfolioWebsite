import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="NavBar">
      <h2>Manjot Kaur</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="divider">Myself</li>
        <li><Link to="/stack">Resume</Link></li>
        <li><Link to="/stack">Tech Stack</Link></li>
        <li><Link to="/stack">Blogs</Link></li>
        <li><Link to="/stack">AMA</Link></li>
        <li className="divider">Projects</li>
        <li><Link to="/projects">Project 1</Link></li>
        <li><Link to="/stack">Project 2</Link></li>
        <li><Link to="/stack">Project 3</Link></li>
        <li className="divider">Online</li>
        
        <li><Link to="/stack">Twitter</Link></li>
        <li><Link to="/stack">LinkedIn</Link></li>
        <li><Link to="/stack">GitHub</Link></li>

        {/* Add more links as needed */}
      </ul>
    </div>
  )
}
