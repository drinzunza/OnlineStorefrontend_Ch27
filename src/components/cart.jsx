import { useContext } from "react";
import store from "../context/storeContext";

const Cart = () => {
  const cart = useContext(store).cart;

  return (
    <div>
      <h1>Your cart</h1>
      <h5>Currently you have {cart.length} products in the cart</h5>
    </div>
  );
};

export default Cart;
