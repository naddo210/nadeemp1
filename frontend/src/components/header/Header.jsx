// import React from 'react'
// import "./header.css"
// const Header = () => {
//   return (
//     <div className='header'>
//         <div className="header-content">
//             <h2>order your favourite food here</h2>
//             <p>Welcome to a world of flavors, where every dish tells a story. At The NADEEMS, we pride ourselves on crafting a menu that blends tradition with innovation, offering something for every palate. Whether youre here for a casual bite, a family gathering, or a special celebration, our menu is designed to delight and satisfy</p>
//             <button>View menu</button>
//         </div>
//     </div>
//   )
// }

// export default Header

import React from 'react';
import "./header.css";
import myvideo from "../../assets/3195369-uhd_3840_2160_25fps.mp4"
import { useNavigate } from 'react-router-dom';
import ExploreMenu from './../Explore-menu/ExploreMenu';

const Header = () => {
  const navigate=useNavigate();
  return (
    <div className="header">
      <video autoPlay muted loop className="header-video">
        <source src={myvideo} type="video/mp4" />
      </video>
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>Welcome to a world of flavors, where every dish tells a story. At The NADEEMS, we pride ourselves on crafting a menu that blends tradition with innovation, offering something for every palate. Whether you're here for a casual bite, a family gathering, or a special celebration, our menu is designed to delight and satisfy.</p>
        <button   className='btn'>View menu</button>
      </div>
    </div>
  );
};

export default Header;
