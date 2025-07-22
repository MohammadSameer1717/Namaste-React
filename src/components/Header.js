import {CDN_URL} from "../../utils/constants"

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} alt="App Logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li> 
        </ul>
      </div>
    </div>
  );
};

export default Header;
