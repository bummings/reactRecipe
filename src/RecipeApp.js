import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';
import Menu from './Menu';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Recipe 
          title = 'Pancake'
          ingredients = {['Pancake', 'Water']} 
          instructions = "Hurry up bruh, I'm hungry"
          img = 'pancake.png'
          />
        <Recipe 
          title = 'Toast'
          ingredients = {['Bread', 'Fire']} 
          instructions = "Don't get crumbs, bruh"
          img = 'toast.jpg'
          />

      </div>
    );
  }
}

export default RecipeApp;
