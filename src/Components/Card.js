import React from "react";

function Card({
    breweryName,
    breweryType,
    street,
    address2,
    address3,
    city,
    countyProvince,
    postalCode,
}) {
    return (
        <div className="card">
            <div className="breweryName">name: {breweryName}</div>
            <div className="breweryType">brewery type: {breweryType}</div>
            <div className="street">street: {street}</div>
            <div className="address2">address 2: {address2}</div>
            <div className="address3">address 3: {address3}</div>
            <div className="city">city: {city}</div>
            <div className="countyProvince">
                county/province: {countyProvince}
            </div>
            <div className="postalCode">postal code: {postalCode}</div>
        </div>
    );
}

export default Card;
