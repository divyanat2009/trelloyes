import React, { Component } from 'react';
import Card from './Card';
import './List.css';

class List extends Component {
  render(props) { 
    return ( 
      <section className="List">
        <header className="List-header">
        <h2>{this.props.header}</h2>
        </header>  
      <div className="List-cards">
           {
            this.props.cards.map(card =>
           <Card key={card.id}
           title={card.title}
           content={card.content}
           />
          )}
          <button type="button" className="List-add-button">
          + Add Random Card
          </button> 
      </div>           
      </section>
    );
  }
}
 
export default List;
