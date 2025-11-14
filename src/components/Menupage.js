import { useEffect } from "react";
const Menupage = () => {
    useEffect(() => {
        //code to fetch menu data based on resId from params
        fetchMenuData();
    }, []);
    const fetchMenuData = async () => {
        //fetch logic here
        // console.log("Fetching menu data...");
        // const data = await()
    };
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
}

export default Menupage;