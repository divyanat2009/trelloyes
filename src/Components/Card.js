import React, { Component } from 'react';

class Card extends Component {
    state = {  }
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