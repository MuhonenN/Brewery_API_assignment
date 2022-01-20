import React from "react";
import { Link, useParams } from "react-router-dom";
import useApiRequest from "../Hooks/apiRequest";
import "./Brewery.css";

function Brewery() {
    const { id } = useParams();
    const url = `https://api.openbrewerydb.org/breweries/${id}`;

    const brewery = useApiRequest(url);

    return (
        <div className="brewery">
            <div className="breweryDetails">
                {brewery.name != null && <h1>{brewery.name}</h1>}
                {brewery.brewery_type != null && (
                    <p style={{ textTransform: "uppercase" }}>
                        {brewery.brewery_type}
                    </p>
                )}
                {brewery.street != null && <p>{brewery.street}</p>}
                {brewery.address2 != null && <p>{brewery.address2}</p>}
                {brewery.address3 != null && <p>{brewery.address3}</p>}
                {brewery.city != null && <p>{brewery.city}</p>}
                {brewery.state != null && <p>{brewery.state}</p>}
                {brewery.county_province != null && (
                    <p>{brewery.county_province}</p>
                )}
                {brewery.postal_code != null && <p>{brewery.postal_code}</p>}
            </div>
            <Link to={`/`} className="backButton">Go Back</Link>
        </div>
    );
}

export default Brewery;
