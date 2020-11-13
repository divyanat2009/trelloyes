import React, { Component } from 'react';
import List from './Components/List';
import './App.css';

class App extends Component {  
  state=
  {
    store: {
      lists: [],
      allCards: {},
    }
  }
  render() {    
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
            ></List>
          ))}
        </div>
      </main>
    );
  }
}
export default App;
