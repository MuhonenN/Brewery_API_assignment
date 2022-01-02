import React, { useEffect, useState } from "react";
import Breweries from "./Breweries";

function Home() {
    const [breweries, setBreweries] = useState([]);

    useEffect(() => {
        const getBreweries = async () => {
            const breweriesFromApi = await fetchBreweries();
            setBreweries(breweriesFromApi);
        };

        getBreweries();
    }, []);

    const fetchBreweries = async () => {
        const res = await fetch(`https://api.openbrewerydb.org/breweries`);
        const data = await res.json();

        return data;
    };

    // const fetchBrewery = async (id) => {
    //     const res = await fetch(
    //         `https://api.openbrewerydb.org/breweries/${id}`
    //     );
    //     const data = await res.json();

    //     return data;
    // };

    return (
        <div className="home">
            <Breweries breweries={breweries} />
        </div>
    );
}

export default Home;
