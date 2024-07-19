import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null); 
  useEffect(() => {
    async function getRecipeById(recipeId) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_KEY}/recipes/${recipeId}`);
        console.log(response.data.recipe);
        setRecipe(response.data.recipe);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    }
    if (id) {
      getRecipeById(id);
    }
  }, [id]); 

  return (
    <div>
      <Navbar />
      <div>
        {recipe ? (
          <div>
            <img className="w-[250px]" src={recipe.imageUrl} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        ) : (
          <div className='flex items-center justify-center w-full h-64 absolute'>
            <div className="recipe-loader"></div>
          </div> 
        )}
      </div>
    </div>
  );
}
