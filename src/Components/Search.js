import searchIcon from "../assets/header/search.png";
import { useNavigate } from "react-router-dom";

const Search = ({ searchQuery, setSearchQuery }) => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        navigate(`?s=${searchQuery}`);
        e.preventDefault();
    };
    return (
        <form action="/" method="get" onSubmit={onSubmit} className="searchBar">
            <button className="searchButton" type="submit">
                {" "}
                <img src={searchIcon} alt="" />
            </button>
            <input
                className="searchInput"
                placeholder="Name, brewery type, city..."
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                name="s"
            />
        </form>
    );
};

export default Search;
