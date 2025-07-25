import RestaurantCard from "../RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/data")
      .then((res) => res.json())
      .then((json) => {
        const restaurants =
          json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants); // 👈 Set both on load
      })
      .catch((err) => {
        console.error("❌ Error fetching data:", err.message);
      });
  }, []);

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const topRated = listOfRestaurants.filter(
      (res) => parseFloat(res?.info?.avgRating) > 4
    );
    setFilteredRestaurants(topRated);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              resData={restaurant}
            />
          ))
        ) : (
          <h3>No restaurants found.</h3>
        )}
      </div>
    </div>
  );
};

export default Body;
