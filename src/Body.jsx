import RestaurantCard from "./Restaurant";

const Body = () => {
   return (
    <div className="body">
        <div className="search-container">
            <input type='text' placeholder='Search Food or Restaurant' />
            <button>Search</button>
        </div>
        <div className="res-container">
         <RestaurantCard />
         <RestaurantCard />
         <RestaurantCard />
         <RestaurantCard />
         <RestaurantCard />
        </div>
    </div>
   )
}

export default Body;