import { Link, useLocation } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <div className="header-container">
      <header className="title">
        <FaLocationDot className="logo-icon" />
        <h2>NekhrogFeen</h2>
      </header>

      <div className="middle-buttons">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <p>Discover</p>
        </Link>

        <Link to="/savedTrips" className={location.pathname === "/savedTrips" ? "active" : ""}>
          <p>Saved Trips</p>
        </Link>

        <Link to="/myAccount" className={location.pathname === "/myAccount" ? "active" : ""}>
          <p>My Account</p>
        </Link>
      </div>

      <button className="join"><p>نخرج فين ؟</p></button>
    </div>
  );
}
