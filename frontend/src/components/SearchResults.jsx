// // SearchResults.jsx
// import React, { useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { StoreContext } from "../context/StoreContext"; // Adjust import as necessary

// const SearchResults = () => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get("query") || "";
//   const { filterFoodList } = useContext(StoreContext);
//   const filteredItems = filterFoodList(query);

//   return (
//     <div>
//       <h2>Search Results for "{query}"</h2>
//       {filteredItems.length > 0 ? (
//         filteredItems.map((item) => (
//           <div key={item._id}></div> // Replace with your item display component
//         ))
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import "./seearchresult.css"
import FoodItem from './foodItem/FoodItem'; // Ensure the path is correct
// import './SearchResults.css'; // Create or update this CSS file for styling

const SearchResults = () => {
  const { search } = useLocation();
  const { food_list, addToCart, removeFromCart, url } = useContext(StoreContext);

  // Extract query parameter from URL
  const query = new URLSearchParams(search).get('query') || '';

  // Filter food_list based on search query
  const filteredFoodList = food_list.filter(foodItem => 
    foodItem.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='search-results'>
      {filteredFoodList.length > 0 ? (
        filteredFoodList.map(item => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))
      ) : (
        <p className='no-results'>No items found.</p>
      )}
    </div>
  );
};

export default SearchResults;
