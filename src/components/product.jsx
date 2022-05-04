import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import store from "../context/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  let addProdToCart = useContext(store).addProdToCart;

  const handleQuantityChange = (val) => {
    console.log("The quantity changed!", val);
    setQuantity(val);
  };

  const handleAdd = () => {
    addProdToCart(props.info);
  };

  return (
    <div className="product">
      <img src={"/images/" + props.info.image} alt="Product"></img>

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

      <button onClick={handleAdd} className="btn btn-sm btn-primary">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
