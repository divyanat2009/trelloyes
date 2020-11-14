import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Card from './Components/Card.js'

describe('My Component', () =>{
//Test Suite

//Smoke Test
test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});
//Snapshot Test
test('renders the UI as expected', ()=>{
    const tree = renderer
      .create(<Card title={'Card Title'} content={'Card Content Lorem Ipsum'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  

});

})