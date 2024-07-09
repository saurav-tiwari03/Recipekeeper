import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal";
import { useGetUserByParams } from './../../hooks/useGetUserByParams';
import { useSelector } from "react-redux";

export default function RightPart() {
  const {user} = useSelector((state) => state.user)
  const { userName } = useParams();
  const { getUserByParams } = useGetUserByParams();
  const [userSearch, setUserSearch] = useState(''); 
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const checkUser = user.userName == userSearch.userName

  const chatHandler = () => {
    toast.error('Currently under development');
  }

  const viewRecipeHandler = () => {
    navigate('/recipes');
  }

  const userDataHandler = async () => {
    try {
      const fetchedUser = await getUserByParams(userName);
      if (fetchedUser) {
        setUserSearch(fetchedUser);
      } else {
        toast.error('User not found');
      }
    } catch (error) {
      toast.error('Error fetching user data');
      console.error(error);
    }
  }

  useEffect(() => {
    userDataHandler();

    const yourRecipesHandler = async () => {
      if (userSearch?._id) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_KEY}/recipe/get/${userSearch._id}`);
          setRecipes(response.data.data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    yourRecipesHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  if (userSearch === null) {
    return <p>Loading...</p>; 
  }

  if (!userSearch) {
    return <p>User not found</p>; // Display user not found message
  }

  return (
    <div className="w-auto mx-4 relative">
      <div className="bg-[#d1c79f] w-[800px] h-[400px] blur-lg opacity-80"></div>
      <div className="absolute top-0 left-0 w-full flex flex-col justify-around h-full">
        {/* User name details */}
        <div className="flex items-center justify-between mx-8 mt-4">
          <div className="flex gap-4">
            <div>
              <p className="text-4xl font-Poppins font-medium text-[#54301a]">{userSearch.name}</p>
              <p className="text-2xl font-OpenSans text-[#54301a]">@{userSearch.userName}</p>
              <hr className="my-1" />
              <p>{userSearch.bio}</p>
            </div>
            {checkUser && <Modal />}
            
          </div>
          <div>
            <button className="bg-[#946043] hover:bg-[#8e5336] duration-300 text-xl px-4 py-2 text-white font-semibold rounded-3xl chat-drop-shadow" onClick={chatHandler}>Chat</button>
          </div>
        </div>

        {/* User Recipe details */}
        <div className="flex items-center font-semibold justify-around">
          <div>
            <p className="font-Mulish text-xl">Recipes Uploaded</p>
            <p className="font-Anton">{userSearch.recipes ? userSearch.recipes.length : 0}</p>
          </div>
          <div>
            <p className="font-Mulish text-xl">Upvotes</p>
            <p className="font-Anton ">{userSearch.upVotes}</p>
          </div>
          <div>
            <p className="font-Mulish text-xl">Rating</p>
            <p className="font-Anton text-xl">{userSearch.rating}</p>
          </div>
        </div>

        {/* Most famous recipes */}
        <div className="mx-8">
          <h1 className="text-2xl font-semibold">Most Famous Recipes</h1>
          <div>
            {
              recipes.length > 0 ?
                <div>
                  {recipes.map((recipe, index) => (
                    <div className="w-[150px] h-[150px] bg-[#f7eecd] drop-shadow-xl rounded-tr-[75px] flex flex-col" key={index}>
                      <img src="" alt="" />
                      <p>{recipe.title}</p>
                      <button className="bg-[#eddd9f] px-4 py-2 rounded-tr-3xl rounded-bl-3xl relative bottom-0 " onClick={viewRecipeHandler}>View Recipe</button>
                    </div>
                  ))}
                </div> :
                <p>0</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
