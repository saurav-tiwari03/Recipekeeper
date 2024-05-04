import {} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Main from './pages/Main'
import Login from './pages/Login'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/main' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  )
}