import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    const { title, img, instructions } = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 clasName="recipe-card-title">{title}</h3>
          <h4>Ingredients</h4>
          <ul>
            <h3>{ingredients}</h3>
          </ul>
          <p>{instructions}</p>
        </div>

      </div>
    );
  }
}

export default Recipe;