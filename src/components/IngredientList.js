import React from 'react'
import Ingredient from './Ingredient'

function IngredientList({ingredients}) {
    const ingredientElements = ingredients.map( ingredient => {
        return  <Ingredient key={ingredient.id} {...ingredient}/>
    })
  return (
    <div className='ingredient-grid'>
       {ingredientElements}
    </div>
  )
}

export default IngredientList