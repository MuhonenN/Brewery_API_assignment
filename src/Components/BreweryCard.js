import React from "react";
import { Link } from "react-router-dom";
import "./BreweryCard.css";

function BreweryCard({ brewery }) {
    return (
        <div className="breweryCard">
            <div className="cardDetails">
                {brewery.name != null && <h3>{brewery.name}</h3>}
                {brewery.brewery_type != null && (
                    <p style={{ "textTransform": "uppercase" }}>
                        {brewery.brewery_type}
                    </p>
                )}
                {/* {brewery.street != null && <p>{brewery.street}</p>}
                {brewery.address2 != null && (
                    <p>{brewery.address2}</p>
                )}
                {brewery.address3 != null && (
                    <p>{brewery.address3}</p>
                )} */}
                {brewery.city != null && <p>{brewery.city}</p>}
                {/* {brewery.state != null && <p>{brewery.state}</p>}
                {brewery.county_province != null && (
                    <p>{brewery.county_province}</p>
                )}
                {brewery.postal_code != null && (
                    <p>{brewery.postal_code}</p>
                )} */}
            </div>
            <Link to={`/brewery/${brewery.id}`} className="cardButton">
                View Details
                {/* <button>View Details</button> */}
            </Link>
        </div>
    );
}

export default BreweryCard;
