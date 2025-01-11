import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../../../context/cartContext";

const Card = ({ card }) => {
  const { addItemToCart } = useContext(CartContext);

  // const handleAddToCart = () => {
  //   addItemToCart(item); // Add the item to the cart
  // };

  const handleAddToCart = () => {
    toast.success("Item added to your cart", {
      style: { backgroundColor: "#35824E", color: "white", fontWeight: "600" },
    });
   
    addItemToCart(card);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={card.image} className="card-img-top" alt={card.title} />
        <div className="card-body">
          <h6 className="card-title">{card.title}</h6>
          <p className="card-text text-muted">{card.description}</p>
          <div className="text-md mt-3 mb-4">
            <span className="text-muted">from</span> ${card.price}
          </div>
          <button className="btn order" onClick={handleAddToCart}>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
