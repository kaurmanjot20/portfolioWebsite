import cover from '../assets/cover1.jpg'
import InfoHack from '../InfoHack';

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
                    <div className="personal-card--links">
                        <a href={project.githubLink} className="personal-card--link" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={project.liveLink} className="personal-card--link" target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="personal-container">
            <img src={cover} className='cover'/>
            <h2>Hackathon</h2>
            <div className="personal-cards-row">
                {renderCards()}
            </div>
        </div>
    );
}

export default Hackathon;
