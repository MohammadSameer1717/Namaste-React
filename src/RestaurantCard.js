 
const RestaurantCard = (props) => {
  const { resData} = props;

  const{
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info || {};

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
    {cloudinaryImageId && (
  <img
    className="res-logo"
    alt="res-logo"
    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${cloudinaryImageId}`}
  />
)}


      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};

export default RestaurantCard;