import React from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = React.useState(1); // state variable

  const handleIncrease = () => {
    let nextQuantity = quantity + 1;
    setQuantity(nextQuantity);
    props.onChange(nextQuantity); // notify the parent
  };

  const handleDecrease = () => {
    let nextQuantity = quantity - 1;
    if (nextQuantity > 0) {
      setQuantity(quantity - 1);
      props.onChange(nextQuantity);
    }
  };

  return (
    <div className="quantity-picker">
      <button onClick={handleIncrease} className="btn btn-sm btn-dark">
        +
      </button>

      <label>{quantity}</label>

      <button onClick={handleDecrease} className="btn btn-sm btn-dark">
        -
      </button>
    </div>
  );
};
export default QuantityPicker;

/**
 *
 * About component
 *
 * - create the component
 * - render about on app js (above footer)
 *
 * - on the about:
 *    - create a name state variable   ""
 *    - render name inside a h3
 *
 *    - create a button
 *    - when the user click on the button
 *    - set name = to your name
 *
 *
 */
