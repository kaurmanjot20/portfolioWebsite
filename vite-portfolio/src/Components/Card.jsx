import PropTypes from 'prop-types';

function Card(props) {
    const { coverImg, title, description, githubLink, liveLink, techStack } = props;

    return (
        <div className="card">
            <div className="card--image">
                <img src={coverImg} alt={title} />
            </div>
            <div className="card--content">
                <h3 className="card--title">{title}</h3>
                {description && <p className="card--description">{description}</p>}
                {techStack && techStack.length > 0 && (
                    <div className="card--tech-stack">
                        {techStack.map((tech, index) => (
                            <span key={index} className="card--tech-item">{tech}</span>
                        ))}
                    </div>
                )}
                {githubLink && liveLink && (
                    <div className="card--links">
                        <a href={githubLink} className="card--link" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={liveLink} className="card--link" target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                )}
            </div>
        </div>
    );
}

Card.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
};

export default Card;
