import React, { Component } from 'react';
import Card from './Card';
import './List.css';

class List extends Component {
  render({header, cards}) { 
    return ( 
      <section className="List">
        <header className="List-header">
        <h2>{header}</h2>
        </header>  
      <div className="List-cards">
           {cards.map(card =>(
           <Card key={card.id}
           title={card.title}
           content={card.content}
           />
          ))}
      </div>           
      </section>
    );
  }
}
 
export default List;
