import RxCardComponent from "./RxCardComponent";
import { rxData } from "../utils/mockData";
import { useState, useEffect } from "react";

const BodyComponent = () => {
  const [rxDataHook, setRxDataHook] = useState(rxData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRxDataHook (rxDataHook.filter((rx) => rx.info.avgRating > 4.5));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rx-container">
        {rxDataHook.map((rx) => (
          <RxCardComponent key={rx.info.id} rxData={rx} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
