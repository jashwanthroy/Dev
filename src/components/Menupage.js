import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const Menupage = () => {
  const [menuInfo, setMenuInfo] = useState(null);
  const {resId} = useParams;
  //Custom Hook
  const resInfo = useRestroMenu(resId);
  

  useEffect(() => {
    //code to fetch menu data based on resId from params
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const ref = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.42485235372867&lng=78.64480845630169&restaurantId=931955&catalog_qa=undefined&submitAction=ENTER"
    );
    // const json = await ref.json()
    // console.log(typeof ref);
    // setMenuInfo(json);
    // console.log(json.data);
  };
  if (menuInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <h1>Name of The Restaurant</h1>
      <h1>Menu</h1>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>French Fries</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};

export default Menupage;
