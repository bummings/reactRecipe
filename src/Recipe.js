import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
  render() {
    const { title, img, instructions } = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));
    return (
      <div className="recipe-collection">
        <div className="recipe-card">
          <div className="recipe-card-img">
            <img src={img} alt={title} />
          </div>
          <div className="recipe-card-content">
            <p className="recipe-card-title">{title}</p>
            <h4>Ingredients</h4>
            <ul>
              <h3>{ingredients}</h3>
            </ul>
            <p>{instructions}</p>
          </div>
        </div>

      </div>
    );
  }
}

export default Recipe;