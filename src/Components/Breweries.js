import React from "react";
import Brewery from "./Brewery";
import "./Breweries.css"

function Breweries({ breweries }) {
    return (
        <div className="breweries">
            <>
                {breweries.map((brewery, i) => (
                    <Brewery key={i} brewery={brewery} />
                ))}
            </>
        </div>
    );
}

export default Breweries;
