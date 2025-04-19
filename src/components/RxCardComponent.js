import { CON_URL } from "../utils/constants";

const RxCardComponent = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    props.rxData.info;
  return (
    <div
      className="rx-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <div className="rx-image">
        <img
          alt="rx-logo"
          src={
            CON_URL +
            cloudinaryImageId
          }
          className="rx-logo"
        />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RxCardComponent;
