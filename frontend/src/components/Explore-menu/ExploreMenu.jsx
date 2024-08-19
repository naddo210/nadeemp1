import React from 'react'
import "./exploremenu.css"
import {menu_list} from "../../assets/frontend_assets/assets";
// here we are destructuring category in {category}
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
<h1>Explore our menu</h1>
<p className='explore-menu-text'>Begin your culinary journey with our tantalizing starters. From crispy, golden appetizers to fresh, vibrant salads, each dish is made with the finest ingredients, setting the stage for what's to come. Try our GREEK SALAD &PERI PERI ROLLS – a customer favorite that’s perfect for sharing.</p>
<div className="explore-menu-list">
    {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>{setcategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index}className="explore-menu-list-item">
               <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" /> 
               <p>{item.menu_name}</p>
            </div>
        )

    })}
</div>
<hr />
    </div>
  )
}

export default ExploreMenu