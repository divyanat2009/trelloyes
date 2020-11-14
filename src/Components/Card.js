import React, { Component } from 'react';
import './Components/Card.css';

class Card extends Component {
   render(props) { 
     return ( 
       <div className="Card">
         <h3>{this.props.title}</h3>
         <p>{this.props.content}</p>
       </div>
       );
   }
}
 
export default Card;