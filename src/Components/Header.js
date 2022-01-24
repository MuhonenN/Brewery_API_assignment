import React from "react";
import "./Header.css";
import breweriesLogoBlack from "../assets/header/breweriesLogoBlack.jpg";
// import breweriesLogoWhite from "../assets/header/breweriesLogoWhite.jpg";
import { Link } from "react-router-dom";
import Search from "./Search";

function Header({ searchQuery, setSearchQuery }) {
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
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
    );
}

export default Header;
