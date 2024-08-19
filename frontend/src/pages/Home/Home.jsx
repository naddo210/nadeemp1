import React, { useState } from 'react'
import"./home.css"
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/Explore-menu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appdownload/AppDownload'
const Home = () => {
  const[category,setcategory]=useState("All")
  return (
    <div>
      <Header/>
            {/* props paassing */}
      <ExploreMenu category={category} setcategory={setcategory}/>  
      <FoodDisplay category={category}/> 
      <AppDownload/>
      

      
    </div>
  )
}

export default Home