import React, { Component } from 'react';
import List from './Components/List';
import renderer from 'react-test-renderer';
import STORE from './store.js';

describe ('My Component', () =>{
  //Test Suite
  
  //Smoke Test
test('renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
});  
  //Snapshot Test
test('render the UI as expected', () =>{
    const tree = renderer
      .create(<Messages name="Messages" unread={4}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
});

})