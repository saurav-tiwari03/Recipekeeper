import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from 'axios'
export default function ViewRecipes() {
  const [recipes,setRecipes] = useState([])
  const [ingredients,setIngredients] = useState([])
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_KEY}/recipes`)
      .then(response => {
        // console.log(response.data.recipes[0])
        axios.get(`${import.meta.env.VITE_API_KEY}/recipes/ingredients/${response.data.recipes[0].ingredients}`)
        .then((res) => {
          // console.log(res.data.ingredients.ingredient)
          setIngredients(res.data.ingredients.ingredient)
        }).catch((err) => {
          console.error(err)
        });
        setRecipes(response.data.recipes)
      })
      .catch(error => {
        console.error(error)
      })
  },[])
  return (
    <div>
      <Navbar />
      <div>
        {
          recipes.length > 0?
            recipes.map((recipe) => (
              <div key={recipe._id}>
                <h3>{recipe.title}</h3>
                <div>{
                  ingredients.map((ingredient) => (
                    <span className="flex " key={ingredient._id} >
                      <p>{ingredient.name}</p>
                      <p>{ingredient.amount}</p>
                    </span>
                  ))}
                </div>
              </div>
            )) :
            <div>
              No recipes found. Please add some recipes.
            </div>
        }
      </div>
    </div>
  )
}
