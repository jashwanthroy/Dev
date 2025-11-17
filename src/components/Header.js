import { useEffect, useState } from "react";
import { Link } from "react-router";
const Header = () => {
  const [lgnin, setLgnin] = useState(false);

  useEffect(() => {
    console.log("Header rendered");
  }, [lgnin]);

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
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
