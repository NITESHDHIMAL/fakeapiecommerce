import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Singleproduct from './pages/Singleproduct'

function App() { 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/shop/:cat' element={<Shop/>} />
      <Route path='/shop/:id' element={<Singleproduct/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/checkout' element={<Checkout/>} />
     </Routes>
     
    </>
  )
}

export default App
