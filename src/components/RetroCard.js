const RestroCard = ({resData}) => {
  const { name,cloudinaryImageId,cuisines,avgRating } = resData.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-2xl bg-gray-300 hover:bg-gray-500">
      <img
        className="rounded-2xl h-[200px]"
        alt="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId
        }
      />
      <h4 className="font-bold py-2 text-2xl">{name}</h4>
      <h5>{cuisines?.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
    </div>
  );
};

export default RestroCard;