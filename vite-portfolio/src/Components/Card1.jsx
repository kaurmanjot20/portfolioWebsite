import PropTypes from 'prop-types';

function Card1(props) {
    const { coverImg, svgIcon, title } = props;

    return (
        <div className="card">
            <div className="card--image">
                {coverImg && <img src={coverImg} alt={title} />}
                {svgIcon && <div className="card--svg">{svgIcon}</div>}
            </div>
            <div className="card--content">
                <h3 className="card--title">{title}</h3>
            </div>
        </div>
    );
}

Card1.propTypes = {
    coverImg: PropTypes.string,
    svgIcon: PropTypes.element,
    title: PropTypes.string.isRequired,
};

export default Card1;
