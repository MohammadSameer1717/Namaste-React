import RestaurantCard from "../RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state vriable - super powerful variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triangle a reconciliation cycle(re-renders the component)
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=27.18230&lng=78.02520&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    // console.log(
    //   json.data.cards[5].card.card.gridElements.restaurants
    // );
    

    // OPtional chaining
    setListOfRestaurant(
      json?.data?.cards[5]?.cards?.cards?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.cards?.cards?.gridElements?.infoWithStyle
        ?.restaurants
    );
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
              // filter the restraunt cards and update the ui
              // searchText
              console.log(searchText);

              const filteredRestaurants = ListOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().include(searchText.toLowerCase())
              );

              setListOfRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
