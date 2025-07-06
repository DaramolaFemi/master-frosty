import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  return (
    <>
    {showLoginPopup?
    <LoginPopup setShowLoginPopup={setShowLoginPopup} /> : <></>}
    <div className='app'>
      <Navbar seSthowLoginPopup={setShowLoginPopup}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App