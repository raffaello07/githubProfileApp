import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    render() {
        return (
        <div>
            { this.props.data.map(prof => <Card key={prof.id} {...prof} />) }
        </div>
        );
    }
}

export default CardList;