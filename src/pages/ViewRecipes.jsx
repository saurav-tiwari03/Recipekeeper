import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import Navbar from './../components/Navbar';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_KEY}/recipes`);
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    }
    getRecipes();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
        <SearchRecipe />
        <SearchUser className='z-100'/>
      </div>
      <div className='recipe-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-4 mr-4 mt-12'>
        {loading ? (
          <div className='flex items-center justify-center w-full h-64 absolute'>
            <div className="recipe-loader"></div>
          </div>
        ) : (
          recipes.map((recipe) => (
            <div className='mx-8 m-4 md:mb-0 md:mx-0 -z-100' key={recipe._id}>
              <div className='recipe-box overflow-y-hidden relative'>
                <h1 className='text-3xl recipe-title absolute -translate-y-10 duration-300 font-Anton text-center w-full text-[#d1c79f] bg-[#744225]'>{recipe.title}</h1>
                <img className='h-[250px] w-full recipe-image' src={recipe.imageUrl} alt="" />
                <div className='text-xl absolute -translate-y-1 duration-300 recipe-view flex items-center justify-around w-full font-Poppins'>
                  <Link to={`/recipes/${recipe._id}`}>View Recipe</Link>
                  <p>{recipe.upVotes.length}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function SearchRecipe() {
  const searchHandler = () => {
    toast.error('Search field is currently not working')
  }
  return (
    <div className='flex my-4'>
      <div className='bg-[#d1c79f] p-4 flex gap-4 rounded-lg md:ml-4 justify-between'>
        <input className='bg-[transparent] outline-none border-b-2 border-gray-500 w-[250px] duration-300 focus:border-[#744224] placeholder:text-[#744225] placeholder:font-semibold placeholder:font-OpenSans' type="text" placeholder="Search recipe" />
        <button className='rounded-lg py-2 px-4 bg-[#744225] text-white' onClick={searchHandler}>Search</button>
      </div>
    </div>
  )
}


function SearchUser() {
  const [input,setInput] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const searchUser = () => {
    console.log(input);
  }
  useEffect(() => {
    const getAllUser = async() => {
      const res = await axios.get(`${import.meta.env.VITE_API_KEY}/user/allUsers`)
      console.log(res.data.usernames);
      setAllUsers(res.data.usernames);
    }
    getAllUser();
  },[])
  return (
    <>
    <div className='flex flex-col md:mr-4 relative '>
      <div className='bg-[#d1c79f] p-4 flex gap-4 rounded-lg md:ml-4 justify-between'>
        <input
          className='bg-[transparent] outline-none border-b-2 border-gray-500 w-[250px] duration-300 focus:border-[#744224] placeholder:text-[#744225] placeholder:font-semibold placeholder:font-OpenSans'
          type="text"
          placeholder="Search user"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='rounded-lg py-2 px-4 bg-[#744225] text-white' onClick={searchUser}>
          Search
        </button>
      </div>
      <div className='absolute top-14 z-200 drop-shadow w-[70%]'>
        <ul className='bg-[#fff] ml-8 text-lg flex flex-col'>
          {
            input.trim() !== '' && allUsers
              .filter(user => user.toLowerCase().includes(input.toLowerCase()))
              .map(user => (
                <Link to={`/user/${user}`} key={user}>{user}</Link>
              ))
          }
        </ul>
      </div>
    </div>
  </>
  
  )
}