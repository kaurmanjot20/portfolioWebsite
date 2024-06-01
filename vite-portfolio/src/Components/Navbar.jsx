import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub, FaDownload, FaBook, FaLightbulb, FaUsers, FaHome, FaQuestionCircle } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className="NavBar">
      <h2>Manjot Kaur</h2>
      <ul>
        <li className="nav-link">
          <Link to="/">
            <FaHome className="nav-icon" /> Home
          </Link>
        </li>
        <li className="divider">Myself</li>
        <li className="nav-link">
          <Link to="/resume">
            <FaDownload className="nav-icon" /> Resume 
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/stack">
            <FaBook className="nav-icon" /> Tech Stack
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/ama">
            <FaQuestionCircle className="nav-icon" /> AMA
          </Link>
        </li>
        <li className="divider">Projects</li>
        <li className="nav-link">
          <Link to="/personal">
            <FaLightbulb className="nav-icon" /> Personal
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/hackathon">
            <FaUsers className="nav-icon" /> Hackathons
          </Link>
        </li>
        <li className="divider">Online</li>
        <li className="nav-link">
          <a href="https://twitter.com/kaurmanjot20" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="nav-icon" /> Twitter
          </a>
        </li>
        <li className="nav-link">
          <a href="http://www.linkedin.com/in/manjot-kaur-6595a0281" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="nav-icon" /> LinkedIn
          </a>
        </li>
        <li className="nav-link">
          <a href="https://github.com/kaurmanjot20" target="_blank" rel="noopener noreferrer">
            <FaGithub className="nav-icon" /> GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
