// import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Brewery from "./Components/Brewery";
import useApiRequest from "./Hooks/apiRequest";
import { useState } from "react";

const filterBreweries = (breweries, query) => {
    if (!query) {
        return breweries;
    }

    return breweries.filter((brewery) => {
        const breweryName = brewery.name.toLowerCase();
        const breweryType = brewery.brewery_type.toLowerCase();
        const breweryStreet = brewery.street.toLowerCase(); // null case
        // const breweryAddress2 = brewery.city.toLowerCase();
        // const breweryAddress3 = brewery.city.toLowerCase();
        // const breweryCity = brewery.city.toLowerCase();
        // const breweryState = brewery.city.toLowerCase();
        // const breweryCounty = brewery.city.toLowerCase();
        // const breweryPostal = brewery.city.toLowerCase();
        // const breweryCountry = brewery.city.toLowerCase();
        // const breweryPhone = brewery.city.toLowerCase();
        // const breweryWebsite = brewery.city.toLowerCase();
        return (
            breweryName.includes(query.toLowerCase()) ||
            breweryType.includes(query.toLowerCase()) ||
            breweryStreet.includes(query.toLowerCase()) 

        );
    });
};

function App() {
    const url = `https://api.openbrewerydb.org/breweries/`;
    const breweries = useApiRequest(url);
    const { search } = window.location;
    const query = new URLSearchParams(search).get("s");
    const [searchQuery, setSearchQuery] = useState(query || "");
    const filteredBreweries = filterBreweries(breweries, searchQuery);

    return (
        <Router>
            <div className="app">
                <Header
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <Routes>
                    <Route
                        path="/"
                        element={<Home breweries={filteredBreweries} />}
                    ></Route>
                    <Route path="/brewery/:id" element={<Brewery />}></Route>
                    <Route
                        path="*"
                        element={
                            <div>
                                <p>There are no breweries here.</p>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

/* console.log(`
⠀⠀⠀⠀⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆
    ⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿
    ⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀
    ⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
    ⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉
    `); */
