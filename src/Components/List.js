import React, { Component } from 'react';
import Card from './Card';
import './List.css';

class List extends Component {
    constructor(props){
      super(props);  
    }
    state = {  }
    render(props) { 
        return ( 
          <section className="List">
            <header className="List-header">
              <h2>{props.header}</h2>
            </header>  
            <div className="List-cards">
                {props.cards.map((card)=>
                <Card key={card.id}
                      title={card.title}
                      content={card.content}
                />
                )}
            </div>
          <div>
            {}     
          </div> 
          </section>
         );
    }
}
 
export default List;
