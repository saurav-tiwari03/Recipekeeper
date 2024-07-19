import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Main from './pages/Main'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import ViewRecipes from './pages/ViewRecipes'
import axios from 'axios'
import { useEffect } from 'react'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Recipe from './pages/Recipe'
export default function App() {
  const {user} = useSelector((state) => state.user)
  // console.log(user)
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_KEY}`)
    .then((res) => {
      console.log(res.data.message)
    })
    .catch((err) => {
      console.log(err)
    })
  })
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/main' element={user ? <Main /> : <Navigate to='/login' />}/>
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/main' />}/>
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/main' />} />
        <Route path='/recipes' element={<ViewRecipes />}/>
        <Route path='/recipes/:id' element={<Recipe />} />
        <Route path='/user/:userName' element={user ? <Profile /> : <Navigate to='/login' />} />
      </Routes>
    </>
  )
}