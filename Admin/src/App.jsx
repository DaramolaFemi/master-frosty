import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import SideBar from './Components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import List from './Pages/LIst/List'
import Add from './Pages/Add/Add'
import Order from './Pages/Orders/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
   <ToastContainer />   
   <NavBar/>
   <hr />
   <div className="app-content">
    <SideBar/>
    <Routes>
      <Route path='/add' element={<Add/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/orders' element={<Order/>}/>
    </Routes>
   </div>
    </div>
  )
}

export default App