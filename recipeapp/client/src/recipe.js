import React from 'react'
import "./Recipe.css"

const Recipe = ({title,image,ingredients}) => {
    return(
      <div>
          <h1>{title}</h1>
          <ol>
              {
                  ingredients.map(ingredient => (
                      <li>{ingredient.text}</li>
                  ))
              }

          </ol>
          <img className="photo" src={image} alt="food" />
      </div>
    )
}

export default Recipe