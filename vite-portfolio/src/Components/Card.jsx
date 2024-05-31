import PropTypes from 'prop-types';

function Card(props) {
    const { coverImg, title, description, githubLink, liveLink } = props;

    return (
        <div className="card">
            <img src={coverImg} className="card--image" alt={title} />
            <div className="card--content">
                <h3 className="card--name">{title}</h3>
                {description && <p className="card--description">{description}</p>}
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
};

export default Card;
