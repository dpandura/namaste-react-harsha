import RxCardComponent from "./RxCardComponent";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router";

const BodyComponent = () => {
  const [rxDataHook, setRxDataHook] = useState([]);
  const [filteredRxDataHook, setFilteredRxDataHook] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRxDataHook(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRxDataHook(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };

  return rxDataHook.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="input" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button onClick={() => {
            setFilteredRxDataHook(rxDataHook.filter((rx) => (rx.info.name.toLowerCase()).includes(searchText.toLowerCase())));
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRxDataHook(rxDataHook.filter((rx) => rx.info.avgRating > 4.5));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rx-container">
        {filteredRxDataHook.map((rx) => (
          <Link  key={rx.info.id} to={"/restaurants/"+rx.info.id}><RxCardComponent rxData={rx} /></Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
