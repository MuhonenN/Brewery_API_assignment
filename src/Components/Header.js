import React from "react";
import "./Header.css";
import breweriesLogoBlack from "../assets/header/breweriesLogoBlack.jpg";
// import breweriesLogoWhite from "../assets/header/breweriesLogoWhite.jpg";
import searchIcon from "../assets/header/search.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="logoContainer">
                <Link to="/">
                    <img
                        src={breweriesLogoBlack}
                        className="breweriesLogo"
                        alt=""
                    />
                </Link>
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt="" />
                </div>
                <input
                    className="searchInput"
                    placeholder="Name, brewery type, city..."
                />
            </div>
        </div>
    );
}

export default Header;
