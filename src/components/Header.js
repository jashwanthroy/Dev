import { useEffect, useState } from "react";
import { Link } from "react-router";
import useInternetStatus from "../../utils/useInternetStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [lgnin, setLgnin] = useState(false);

  useEffect(() => {
    console.log("Header rendered");
  }, [lgnin]);
  const onlineStatus = useInternetStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-200 shadow-lg m-4">
      <div className="logo">
        <img
          className="w-50 p-3 m-2"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 font-bold text-2xl">
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setLgnin(!lgnin);
            }}
          >
            {lgnin ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
