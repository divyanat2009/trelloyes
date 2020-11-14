import React, { Component } from 'react';
import List from './Components/List.js';
import './App.css';

class App extends Component {  

  render(props) {   
    const lists = this.props.store.lists;
    const allCards = this.props.store.allCards 
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {
          lists.map(list => (
            <List
              key={'list-'+list.id}
              header={list.header}
              cards={list.cardIds.map(cardId => allCards[cardId])}
            />
          ))}
        </div>
      </main>
    );
  }
}
export default App;
