import React from "react";
import "./Breweries.css";
import BreweryCard from "./BreweryCard";

function Breweries({ breweries }) {
    return (
        <div className="breweries">
            <>
                {breweries.map((brewery, i) => (
                    <BreweryCard key={i} brewery={brewery} />
                ))}
            </>
        </div>
    );
}

export default Breweries;
