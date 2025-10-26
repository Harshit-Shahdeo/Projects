import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Home/Coin/Coin'
const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/coin/:coinId' element ={<Coin/>}/>
      </Routes>
    </div>
  )
}

export default App
