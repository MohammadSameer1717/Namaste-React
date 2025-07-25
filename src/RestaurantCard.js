import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId = "",
    name = "Unknown",
    avgRating = "N/A",
    cuisines = [],
    costForTwo = "N/A",
    sla = {},
  } = resData?.info || {};

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt={`${name} logo`}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString || "Delivery time unavailable"}</h4>
    </div>
  );
};

export default RestaurantCard;
