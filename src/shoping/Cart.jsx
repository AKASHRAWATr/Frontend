import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Boss } from "../App";
import Navbar from "../component/Navbar";
import { toast } from "react-toastify";

const Cart = () => {
  const { setCart, usersave } = useContext(Boss);

  const [cartdata, setcartdata] = useState([]);
  const [qty, setQty] = useState({});
  const [products, setProducts] = useState([]);
  const getallcart = async () => {
    const res = await axios.get(
      `https://backend-o6x8.onrender.com/products/allcart/${usersave._id}`
    );

    setCart(res.data);
    setcartdata(res.data.cart);
  };

  useEffect(() => {
    getallcart();
  }, []);

  const increaseQty = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const totalPrice = cartdata.reduce(
    (total, item) => total + item.price * (qty[item._id] || 1),
    0
  );
  const handlePayment = async () => {
    try {
      const { data: order } = await axios.post(
        "https://backend-o6x8.onrender.com/api/payment/create-order",
        {
          totalPrice: totalPrice,
        }
      );

      const options = {
        key: "rzp_test_T2a0jtC4IjW2mR",

        totalPrice: totalPrice,

        currency: "INR",

        name: "Nike Store",

        description: "Shoes Purchase",

        order_id: order.id,

        handler: async function (response) {
          console.log(response);

          alert("Payment Successful");

          // await verifyPayment(response);
        },

        prefill: {
          name: usersave?.name,
          email: usersave?.email,
        },

        theme: {
          color: "#111",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

      console.log("Total Price:", totalPrice);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://backend-o6x8.onrender.com/products/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${usersave?.token}`,
          },
        }
      );
      toast.success("product delete successfully 🎉");

      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
      toast.error("data can not be deleted 👎 ");
    }
    console.log("usersave:", usersave);
    console.log("token:", usersave?.token);
  };
  return (
    <>
      <Navbar />

      <div className="top-banner">
        <span>Enjoy 10% Off On The Nike App. Use: APP10</span>
      </div>

      <div className="cart-item">
        <div className="left-cart">
          <h1>Bag</h1>

          {cartdata.map((item) => (
            <div key={item._id}>
              <div className="cart-image">
                <img src={item.image} alt={item.title} />

                <div className="cart-image-1">
                  <p>{item.title}</p>
                  <p style={{ color: "gray" }}>{item.category}</p>
                  <p style={{ color: "gray" }}>14 Day Return</p>
                  <p>{item.categorys}</p>
                  <p>Rating: {item.rating}</p>
                </div>

                <div className="cart-price">
                  <p>
                    ₹ {(item.price * (qty[item._id] || 1)).toLocaleString()}
                  </p>
                </div>
              </div>

              <div
                className="icon-cart"
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "1em",
                  marginBottom: "1em",
                }}
              >
                <div className="qty-box">
                  <i
                    className="ri-subtract-line"
                    onClick={() => decreaseQty(item._id)}
                    style={{ cursor: "pointer" }}
                  ></i>

                  <span>{qty[item._id] || 1}</span>

                  <i
                    className="ri-add-line"
                    onClick={() => increaseQty(item._id)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>

                <div className="wishlist">
                  <i
                    onClick={() => handleDelete(item._id)}
                    class="ri-delete-bin-line"
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="right-carrt">
          <div className="summary-card">
            <h1>Summary</h1>

            <div className="row">
              <span>Bag Total</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            <div className="row">
              <span>Sub Total</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            <div className="row">
              <span>Shipping Charges</span>
              <span className="free">Free</span>
            </div>

            <div className="row total">
              <span>You Pay</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>

            <hr />

            <div className="promo">
              <div>
                <h3>Have a promo code?</h3>
                <p>Apply now to get instant savings</p>
              </div>

              <i className="ri-arrow-right-s-line"></i>
            </div>

            <hr />

            <button onClick={handlePayment} className="buy-btn">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
