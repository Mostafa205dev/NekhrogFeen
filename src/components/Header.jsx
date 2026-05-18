import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [active, setActive] = useState("discover");

  return (
    <div className="header-container">
      <header className="title">
        <h2>NekhrogFeen</h2>
      </header>

      <div className="middle-buttons">
        <button
          onClick={() => setActive("discover")}
          className={active === "discover" ? "active" : ""}
        >
          <p>Discover</p>
        </button>

        <button
          onClick={() => setActive("saved")}
          className={active === "saved" ? "active" : ""}
        >
          <p>Saved Trips</p>
        </button>

        <button
          onClick={() => setActive("account")}
          className={active === "account" ? "active" : ""}
        >
          <p>My Account</p>
        </button>
      </div>

      <button className="join"><p>Start Journey</p></button>
    </div>
  );
}

