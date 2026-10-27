const RestaurantCard = () => {

     return (
        <div className="res-card">
          <img className= 'res-logo' src = "https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt='image' />
           <h3>{name}</h3>
      <h4>Meghana Foods</h4>
      <h4>4.4 stars</h4>
      <h4>₹400 for Two</h4>
      <h4>35 minutes</h4>       
        </div>
     )
}

export default RestaurantCard;