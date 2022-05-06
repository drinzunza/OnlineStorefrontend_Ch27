import "./productInCart.css";

const ProductInCart = (props) => {
  const getTotal = () => {
    return "$ " + (props.info.quantity * props.info.price).toFixed(2);
  };

  return (
    <div className="prod-cart">
      <img src={"/images/" + props.info.image} alt="Product"></img>

      <h6>{props.info.title}</h6>

      <label>{props.info.price.toFixed(2)}</label>
      <label>{props.info.quantity}</label>
      <label>{getTotal()}</label>

      <button className="btn btn-sm btn-danger">Del</button>
    </div>
  );
};

export default ProductInCart;

/**
 *
 * Cart should send a prop to ProductInCart
 * assign a unique key
 *
 * get the props on the function (line 3)
 * render the data props.info.title
 * make the component to look something like
 *  Image
 *  Title
 *  Price
 *  Quantity
 *  Total (Price * Quantity)
 *  Button to delete
 */
