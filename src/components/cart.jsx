import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productInCart";

import "./cart.css";

const Cart = () => {
  const cart = useContext(store).cart;

  // create get total
  // create a total variable
  // travel the cart array
  // get every product
  // from the product get the price * quantity
  // add that to a running total variable
  // return the total

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity * prod.price;
    }

    return "$ " + total.toFixed(2);
  };

  return (
    <div class="cart">
      <h1>Your cart</h1>
      <h5>Currently you have {cart.length} products in the cart</h5>

      <div className="cart-content">
        <div className="products">
          {cart.map((prod) => (
            <ProductInCart key={prod._id} info={prod}></ProductInCart>
          ))}
        </div>

        <div className="side-panel">
          <h6>Are you ready to pay?</h6>
          <h5>{getTotal()}</h5>
          <hr />
          <button className="btn btn-block btn-primary">Proceed to payment</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
