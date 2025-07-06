import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../Components/FoodDisplay/Fooddisplay'
import AppDownload from '../../Components/Appdownload/AppDownload'
const Home = () => {
    const [category, setCategory] = useState('All')
  return (
   
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/> 
      <Fooddisplay category= {category}/> 
      <AppDownload/>
    </div>
  )
}

export default Home