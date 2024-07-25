/* eslint-disable no-unused-vars */
import { useParams,Link } from "react-router-dom";
import axios, { formToJSON } from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {PiSpinnerGapLight} from 'react-icons/pi'
import {useUpVote} from './../hooks/useUpVote'
import { useSelector } from "react-redux";

export default function Recipe() {
  const { id } = useParams();
  const user = useSelector((state) => state.user)
  const [recipe, setRecipe] = useState(null);
  const [recipeOwnerInfo, setRecipeOwnerInfo] = useState(null);
  const [ingredients, setIngredient] = useState([]);
  const [upVoteLoader,setUpVoteLoader] = useState(false);
  const {upvote} = useUpVote()

  const upVoteHandler = () => {
    if(!user) {
      toast.error('Please login to upvote')
      return;
    }
    setUpVoteLoader(!upVoteLoader);
    upvote(id,user.user.id)
  }

  useEffect(() => {
    async function getRecipeOwnerInfo(userId) {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_KEY}/user/get/${userId}`);
        // console.log(res.data.user.image);
        setRecipeOwnerInfo(res.data.user);
      } catch (error) {
        console.log(error);
      }
    }

    async function getRecipeById(recipeId) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_KEY}/recipes/${recipeId}`);
        setRecipe(response.data.recipe);
        // console.log(response.data.recipe.ingredients[0]);
        setIngredient(response.data.recipe.ingredients);
        getRecipeOwnerInfo(response.data.recipe.recipeBy);
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
      <div className="flex items-center justify-center bg-[#f0f0f0] h-[85vh]">
        {recipe ? (
          <div className="bg-[#c5b884] flex p-24 rounded-lg justify-between w-[90%]">
            {/* Left side div */}
            <div className="w-[70%]">
              <div>
                <h1 className="text-5xl font-Poppins font-semibold ">{recipe.title}</h1>
                <p>Pubjabli Chole masale</p>
              </div>
              <hr />
              <div className="w-full">
                <h1 className="text-3xl font-Poppins font-semibold mb-4">Ingredients</h1>
                {ingredients.map((ingredient,index) => (
                  <div className="flex items-center justify-around " key={index}>
                    <h3 className="text-xl font-Anton">{ingredient.name}</h3>
                    <p>{ingredient.amount}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right side div */}
            <div className="flex flex-col bg-[#dbd4b9] p-8 rounded-lg">
              <div className="drop-shadow my-2">
                <img className="h-[150px] w-[250px]" src={recipe.imageUrl} alt="" />
              </div>
              <div className="flex flex-col items-center ">
                <div>
                  {recipeOwnerInfo && (
                    <div className="flex items-center text-xl gap-2 my-2 ">
                      <img className="h-[50px] w-[50px] rounded-full" src={recipeOwnerInfo.image} alt="" />
                      <Link to={`/user/${recipeOwnerInfo.username}`}>
                        <h3 className="text-[#744225] font-Poppins lowercase">{recipeOwnerInfo.name}</h3>
                      </Link>
                    </div>
                  )}
                </div>
                <button className="bg-[#744225] text-white font-bold w-[100px] h-[30px] rounded-xl" onClick={upVoteHandler}>
                  {
                    upVoteLoader? (
                      <div className="flex items-center justify-center ">
                        < PiSpinnerGapLight className='animate-spin'/>
                      </div>
                    ) : (
                      "Upvote"
                    )
                  }
                </button>
              </div>
            </div>
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
