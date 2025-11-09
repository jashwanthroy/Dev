const RestroCard = ({resData}) => {
  const { name,cloudinaryImageId,cuisines,avgRating } = resData;
  return (
    <div className="restro-card">
      <img
        alt="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId
        }
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
    </div>
  );
};

export default RestroCard;