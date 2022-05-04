import React from "react";

// describes the data that will be available on the store
// WILL NOT CONTAIN ANY DATA
let store = React.createContext({
  cart: [],
  user: {},

  addProdToCart: () => {},
  removeProdFromCart: () => {},
});

export default store;
