import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
      const { resData } = props;

      const{ cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;

      return (
         <div className="resCard" style={{ backgroundColor: '#f0f0f0'}}>
            <img className="res-logo" src= {CDN_URL + cloudinaryImageId} alt = "biryani" />
            <div className="res-card-content">
                <h3>{name}</h3>
                <hr />
                <em>{cuisines.join(', ')}</em>
                <h4>{avgRating} stars</h4>
                <h4>₹{costForTwo / 100} FOR TWO</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
         </div>
      );
};

export default RestaurantCard;