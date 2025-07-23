import RestaurantCard from "../RestaurantCard"; 
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
 

const Body = () => {
  // local state vriable - super powerful variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("")

  // Whenever state variables update, react triangle a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   const data = await fetch('https://dummyjson.com/recipes');

    const json = await data.json();

  

     const restaurants = json?.recipes|| [];
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = ListOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            // filter the restraunt cards and update the ui
          // searchText
            const filteredList = ListOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;