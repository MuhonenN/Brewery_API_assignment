import React from "react";
import "./Brewery.css";

function Brewery({ brewery }) {
    console.log(brewery);

    return (
        <div className="brewery">
            {brewery.name != null && <h2>{brewery.name}</h2>}
            {brewery.brewery_type != null && (
                <p>brewery type: {brewery.brewery_type}</p>
            )}
            {brewery.street != null && <p>street: {brewery.street}</p>}
            {brewery.address2 != null && <p>address2: {brewery.address2}</p>}
            {brewery.address3 != null && <p>address3: {brewery.address3}</p>}
            {brewery.city != null && <p>city: {brewery.city}</p>}
            {brewery.state != null && <p>state: {brewery.state}</p>}
            {brewery.county_province != null && (
                <p>county/province: {brewery.county_province}</p>
            )}
            {brewery.postal_code != null && (
                <p>postal code: {brewery.postal_code}</p>
            )}
        </div>
    );
}

export default Brewery;
