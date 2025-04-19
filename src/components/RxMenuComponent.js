import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router";

const RxMenuComponent = () => {

    const [rxMenuDataHook, setRxMenuDataHook] = useState(null);

    const {rxId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+rxId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        setRxMenuDataHook(json.data);
    }

    if (rxMenuDataHook === null) return <ShimmerComponent/>

    const {name, cuisines, costForTwoMessage} = rxMenuDataHook?.cards[2]?.card?.card?.info;

    const {itemCards} = rxMenuDataHook?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (  
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs{item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RxMenuComponent;