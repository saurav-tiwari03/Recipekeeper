import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Main from './pages/Main'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import ViewRecipes from './pages/ViewRecipes'
import axios from 'axios'
import { useEffect } from 'react'

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
        <Route path='/recipes' element={user ? <ViewRecipes /> : <Navigate to='/login' />} />
      </Routes>
    </>
  )
}