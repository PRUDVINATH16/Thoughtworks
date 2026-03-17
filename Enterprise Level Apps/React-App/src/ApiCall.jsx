import React from 'react'

function ApiCall() {
  const [recipes, setRecepies] = React.useState();
  React.useEffect( ()=> {
    fetch('https://dummyjson.com/recipes')
    .then( (res)=> res.json())
    .then( (data) => setRecepies([...data.recipes]))
  }, [])
  return (
    <div className='box border-warning'>
      {
        recipes?.map( (recipe) => 
          <li key={recipe.id}>{recipe.name}</li>
        )
      }
    </div>
  )
}

export default ApiCall