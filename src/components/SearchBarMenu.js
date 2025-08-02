import { useEffect, useState } from "react";

import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";

const MenuSearchBar = () => {
  const { resId } = useParams();
  const [MenuDishes, setMenuDishes] = useState([]);
  const [FilterMenuDishes, setFilterMenuDishes] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  const FetchDishes = async () => {
    const Data = await fetch?.("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4804247&lng=80.29115589999999&restaurantId=" + resId);
    const json = await Data.json();

    const dishes =
      json?.data?.cards
        ?.find((c) => c.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
          (c) => c.card?.card?.itemCards || []
        )
        ?.map((i) => i?.card?.info)
        ?.filter(Boolean) || [];

    setMenuDishes(dishes);
    setFilterMenuDishes(dishes);
  };

  useEffect(() => {
    FetchDishes();
  }, []);

  const handleSearch = () => {
    const filtered = MenuDishes.filter((dish) =>
      dish?.name?.toLowerCase().includes(searchtext.toLowerCase())
    );
    setFilterMenuDishes(filtered);
  };

  return MenuDishes.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="menu-container">
      <div className="filter-buttons">
        <button className="filter-btn">
          <span className="veg-icon">
            <span className="veg-dot"></span>
          </span>
        </button>
        <button className="filter-btn">
          <span className="nonveg-icon">
            <span className="nonveg-dot"></span>
          </span>
        </button>
        <button className="filter-btn bestseller-btn">Bestseller</button>
      </div>
      <br />
      <br />
      <h2 className="menu-title">
        <span>༺</span> MENU <span>༻</span>
      </h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for dishes"
          className="search-input"
          onChange={(e) => setsearchtext(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          <span className="search-icon">&#128269;</span>
        </button>
      </div>

      {/* Dish List */}
      <div className="dish-list">
        {FilterMenuDishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            {/* Left: Text */}
            <div className="dish-details">
              <h3>{dish?.name}</h3>
              <p className="dish-description">{dish?.description}</p>
              <p className="dish-price">₹{dish?.price / 100}</p>
            </div>

            {/* Right: Image */}
            {dish?.imageId && (
              <div className="dish-image-container">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${dish.imageId}`}
                  alt={dish.name}
                  className="dish-image"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MenuSearchBar;