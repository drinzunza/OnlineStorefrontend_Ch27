import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val) => {
    console.log("The quantity changed!", val);
    setQuantity(val);
  };

  return (
    <div className="product">
      <img src={"/images/" + props.info.image}></img>

      <h3>{props.info.title}</h3>

      <div className="prices">
        <label className="total">
          <span>Total:</span>${(props.info.price * quantity).toFixed(2)}
        </label>
        <label className="price">
          <span>Price:</span>${props.info.price.toFixed(2)}
        </label>
      </div>

      <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

      <button className="btn btn-sm btn-primary">Add to cart</button>
    </div>
  );
};

export default Product;
