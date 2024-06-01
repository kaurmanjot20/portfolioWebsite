import Card1 from './Card1';
import stackData from '../InfoStack';

const renderCards = (data) => {
    return data.map((item) => (
        <Card1 key={item.id} title={item.title} coverImg={item.coverImg} />
    ));
};

function Stack() {
    return (
        <div>
            
        <div className="stack-container">
            <h2 className="h2">Stack</h2>
            <div className="stack-cards-row">
                {renderCards(stackData.stack)}
            </div>
            <h2 className="h2">Programming Languages</h2>
            <div className="stack-cards-row">
                {renderCards(stackData.programmingLanguages)}
            </div>
            <h2 className="h2">Tools</h2>
            <div className="stack-cards-row">
                {renderCards(stackData.tools)}
            </div>
        </div>
        </div>
    );
}

export default Stack;
