import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});

  const handleTextChange = (e) => {
    let copy = { ...product };
    copy[e.target.name] = e.target.value;

    setProduct(copy);
  };

  const handleCouponChange = (e) => {
    let copy = { ...coupon };
    copy[e.target.name] = e.target.value;

    setCoupon(copy);
  };

  const handleSaveProduct = () => {
    // validations
    if (product.title.length < 5) {
      alert("Error, Title should have at least 5 chars");
      return;
    }

    if (!product.image) {
      alert("Error, Image can not be empty");
      return;
    }

    if (!product.category) {
      alert("Error, Category can not be empty");
      return;
    }

    let savedProduct = { ...product };
    savedProduct.price = parseFloat(product.price);

    if (!savedProduct.price || savedProduct.price < 1) {
      alert("Error, Price should be greater than $1");
      return;
    }

    // send product to Server
    console.log(savedProduct);
  };

  const handleSaveCoupon = () => {
    console.log(coupon);

    let savedCoupon = { ...coupon };
    savedCoupon.discount = parseFloat(savedCoupon.discount);

    // validations:
    // 1 discount cant not be greater than 35%
    if (!savedCoupon.discount || savedCoupon.discount > 35) {
      alert("Error, discount can not be lower than 1 or greater than 35%");
      return;
    }

    // 2 code should have at least 5 chars
    if (savedCoupon.code.length < 5) {
      alert("Error, code should contain at least 5 characters");
      return;
    }

    // send coupon to Server
    console.log("Saving coupon");
  };

  return (
    <div className="admin-page">
      <div className="sections-container">
        <section className="sec-products">
          <h4>Manage Products</h4>

          <div className="form">
            <div className="my-control">
              <label>Title:</label>
              <input onChange={handleTextChange} name="title" type="text" />
            </div>

            <div className="my-control">
              <label>Image:</label>
              <input onChange={handleTextChange} name="image" type="text" />
            </div>

            <div className="my-control">
              <label>Category:</label>
              <input onChange={handleTextChange} name="category" type="text" />
            </div>

            <div className="my-control">
              <label>Price:</label>
              <input onChange={handleTextChange} name="price" type="number" />
            </div>

            <div className="my-control">
              <button onClick={handleSaveProduct} className="btn btn-dark">
                Register Product
              </button>
            </div>
          </div>
        </section>

        <section className="sec-coupons">
          <h4>Manage Coupon Codes</h4>

          <div className="form">
            <div className="my-control">
              <label>Coupon Code:</label>
              <input onChange={handleCouponChange} name="code" type="text" />
            </div>

            <div className="my-control">
              <label>Discount:</label>
              <input onChange={handleCouponChange} name="discount" type="number" />
            </div>

            <div className="my-control">
              <button onClick={handleSaveCoupon} className="btn btn-dark">
                Register Coupon
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
