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
        <li><Link to="/stack">AMA</Link></li>
        <li className="divider">Projects</li>
        <li><Link to="/personal">Personal</Link></li>
        <li><Link to="/hackathon">Hackathons</Link></li>
        <li className="divider">Online</li>
        <li><a href="https://twitter.com/kaurmanjot20" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="http://www.linkedin.com/in/manjot-kaur-6595a0281" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/kaurmanjot20" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}
