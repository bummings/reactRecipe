import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
          title = 'pancake'
          ingredients = {['weed', 'water']} 
          instructions = 'Just fuckin do it now bruh'
          img = 'pancake.png'
          />
      </div>
    );
  }
}

export default RecipeApp;
