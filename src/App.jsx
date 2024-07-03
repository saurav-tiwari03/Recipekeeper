import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Main from './pages/Main'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

export default function App() {
  const {user} = useSelector((state) => state.user)
  console.log(user)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/main' element={user ? <Main /> : <Navigate to='/login' />}/>
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/main' />}/>
      </Routes>
    </>
  )
}