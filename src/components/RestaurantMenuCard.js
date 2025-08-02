import React, { useState } from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenuCard = () => {
  const { resId } = useParams();
  const [resinfo, setResInfo] = useState({});

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  const fetchRestaurantInfo = async () => {
    const Data = await fetch(
       "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4804247&lng=80.29115589999999&restaurantId="+ resId + "&query=Roll&source=collection"
    );
    const json = await Data.json();
    setResInfo(json.data);
  };
  if (!resinfo?.cards || resinfo.cards.length < 3) {
    return <ShimmerUI />; // or null or a shimmer
  }
  return (
    <div
      className="mx-auto my-5 px-5 py-3  shadow"
      style={{ maxWidth: "calc(100% - 200px)", borderRadius: "30px" }}
    >
      <div
        className="card-header"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <div className="logosvg">
          <img
            src="https://logodix.com/logo/710626.png"
            alt=""
            style={{ marginTop: "8px", width: "25px", height: "25px" }}
          />
        </div>
        <div className="rating m-2  fw-bold">
          {resinfo?.cards?.[2]?.card?.card?.info?.avgRatingString ||
            "Loading..."}{" "}
          +{" "}
          {resinfo?.cards?.[2]?.card?.card?.info?.totalRatingsString ||
            "Loading..."}
        </div>
        <div className="costfortwo m-2  fw-bold">
          {" "}
          {resinfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage ||
            "Loading..."}
        </div>
      </div>
      <div
        className="address-time"
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
      >
        {/* Left vertical line with circles */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              width: "2px",
              height: "25px",
              backgroundColor: "gray",
            }}
          ></div>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          ></div>
        </div>

        {/* Right text content */}
        <div className="card-body">
          <h5
            className="card-header-text  fw-bold"
            style={{ color: "darkorange" }}
          >
            {resinfo.cards[2]?.card?.card?.info?.cuisines?.join(", ")}
          </h5>
          <p className="card-text">
            Outlet - {resinfo.cards[2]?.card?.card?.info?.areaName}
          </p>
        </div>
      </div>

      <div
        className="Restaurant-cardBottomText t fw-bold"
        style={{ color: "black" }}
      >
        {resinfo?.cards[2]?.card?.card?.info?.slugs?.restaurant}
      </div>
    </div>
  );
};

export default RestaurantMenuCard;