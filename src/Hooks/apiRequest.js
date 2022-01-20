import { useEffect, useState } from "react";

export default function useApiRequest(url) {
    const [request, setRequest] = useState([]);

    useEffect(() => {
        const getBreweries = async () => {
            const data = await fetchData();
            setRequest(data);
        };
        getBreweries();
    }, [url]);

    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    };
    return request;
}
