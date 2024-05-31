import React from 'react';
import cover from '../assets/cover1.jpg';
import InfoStack from '../InfoStack';
import Card from './Card';

function Stack() {
    const renderCards = (items) => {
        return items.map((item) => (
            <Card
                key={item.id}
                coverImg={item.coverImg}
                title={item.title}
            />
        ));
    };

    return (
        <div>
            <div>
                <img src={cover} className='cover' alt='Cover'/>
            </div>
            <div className="stack-container">
                <h2>Stack</h2>
                <div className="cards-row">
                    {renderCards(InfoStack.stack)}
                </div>

                <h2>Programming Languages</h2>
                <div className="cards-row">
                    {renderCards(InfoStack.programmingLanguages)}
                </div>

                <h2>Tools</h2>
                <div className="cards-row">
                    {renderCards(InfoStack.tools)}
                </div>
            </div>
        </div>
    );
}

export default Stack;
