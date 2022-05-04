import store from "./storeContext";
import { useState } from "react";

const GlobalStoreProvider = (props) => {
  let [cart, setCart] = useState([]);
  let [mockUser, setMockUser] = useState({ id: 42, email: "bart@simpson.com" });

  let addProdToCart = (prod) => {
    // add prod to cart
    let copy = [...cart];
    copy.push(prod);
    setCart(copy);
  };

  let removeProdFromCart = () => {
    console.log("Removing prod");
  };

  return (
    <store.Provider
      value={{
        cart: cart,
        user: mockUser,
        addProdToCart: addProdToCart,
        removeProdFromCart: removeProdFromCart,
      }}
    >
      {props.children}
    </store.Provider>
  );
};

export default GlobalStoreProvider;

/**
 * create a  cart cmp
 *     show a simple h1
 *
 * register the route (app.js)  /cart
 *
 * navbar, click on the button you send the user to /cart
 *
 *
 * on cart
 *    connect to the store
 *    get the cart array
 *    display the number of elements in the array
 *
 */
