
import InfoHack from '../InfoHack';
import { FaGithub, FaGlobe } from 'react-icons/fa';
function Hackathon() {
    const renderCards = () => {
        return InfoHack.map((project) => (
            <div className="personal-card" key={project.id}>
            <div className="personal-card--image">
                <img src={project.coverImg} alt={project.name} />
            </div>
            <div className="personal-card--content">
                <h3 className="personal-card--title">{project.name}</h3>
                <p className="personal-card--description">{project.description}</p>
                {project.techStack && project.techStack.length > 0 && (
                    <div className="personal-card--tech-stack">
                        {project.techStack.map((tech, index) => (
                            <span key={index} className="personal-card--tech-item">{tech}</span>
                        ))}
                    </div>
                )}
                <div className="personal-card--links">
                    <a href={project.githubLink} className="personal-card--link" target="_blank" rel="noopener noreferrer"><FaGithub className='link-icon'/></a>
                    <a href={project.liveLink} className="personal-card--link" target="_blank" rel="noopener noreferrer"><FaGlobe className="link-icon" /></a>
                </div>
            </div>
        </div>
        ));
    };

    return (
        <div className="personal-container">
            
            <h2 className="h2">Hackathon</h2>
            <div className="personal-cards-row">
                {renderCards()}
            </div>
        </div>
    );
}

export default Hackathon;
