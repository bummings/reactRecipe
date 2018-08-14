import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <h1 className='app-name'>Recipe App</h1>
        <ul className='app-menu'>
          <li>New Recipe</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    );
  }
}

export default Menu;