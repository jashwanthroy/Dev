import { useEffect, useState } from "react";
import { Link } from "react-router";
import useInternetStatus from "../../utils/useInternetStatus";
const Header = () => {
  const [lgnin, setLgnin] = useState(false);

  useEffect(() => {
    console.log("Header rendered");
  }, [lgnin]);
  const onlineStatus = useInternetStatus();
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
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
