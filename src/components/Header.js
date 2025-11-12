import { useEffect, useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
