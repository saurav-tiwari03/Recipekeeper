import { useState } from "react";


export const useUploadRecipe = () => {
  const [error,setError] = useState();
  const [loading, setLoading] = useState(false);
  const uploadRecipe = async(title,tags,ingredients,recipeBy,recipeImg) => {
    try {
      console.log(title,tags,ingredients,recipeBy,recipeImg)
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return {uploadRecipe,error,loading}
}