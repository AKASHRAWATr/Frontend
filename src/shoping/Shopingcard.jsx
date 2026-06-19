import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Boss } from "../App";
import { toast } from "react-toastify";

const Shopingcard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { usersave, cart, setCart } = useContext(Boss);
  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await axios.get(
          `https://backend-o6x8.onrender.com/products/${id}`
        );

        setProduct(res.data.products);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getproduct();
  }, [id]);

  const addToCart = async () => {
    try {
      const res = await axios.post(
        "https://backend-o6x8.onrender.com/products/add-to-cart",
        {
          userId: usersave._id,
          productId: product._id,
        }
      );
      console.log(res.data);
      setCart(res.data.cart);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }
  const sizes = [
    { size: "UK 6", stock: 10 },
    { size: "UK 7", stock: 5 },
    { size: "UK 8", stock: 0 },
    { size: "UK 9", stock: 3 },
    { size: "UK 10", stock: 0 },
  ];
  return (
    <>
      <Navbar></Navbar>
      <div class="top-banner">
        <span>Enjoy 10% Off On The Nike App. Use: APP10</span>

        <div class="banner-links">
          <a href="#">Download Now</a>
          <a href="#">T&Cs</a>
        </div>
      </div>

      <div className="card-container">
        <div className="left-card-container">
          <img src={product.image} />
        </div>
        <div className="right-card-container">
          <p>Nike Downshifter 14</p>
          <p style={{ fontSize: "16px", color: "gray" }}>
            Men's Road Running Shoe
          </p>
          <p style={{ fontSize: "16px" }}>₹4,895</p>
          <p style={{ fontSize: "14px", color: "gray" }}>
            Inclusive of all taxes
          </p>
          <div className="card-title">
            <p>Select Size</p>
            <p>Size Guide</p>
          </div>
          <div className="sizes">
            {sizes.map((item, index) => (
              <div
                key={index}
                className={`size-box ${item.stock === 0 ? "out-of-stock" : ""}`}
              >
                {item.size}
              </div>
            ))}
          </div>
          <button id="add-to-card" onClick={addToCart}>
            Add to Card
          </button>
          <button id="add-to-cards">
            Favourite <i class="ri-heart-line"></i>
          </button>
          <div className="pragraph">
            <p className="pra-link">
              Kick your stride into another gear in the Downshifter 14. We
              increased the amount of cushioning in the midsole for more comfort
              and responsiveness than the previous iteration.
            </p>
            <p className="pra-link">
              . Colour Shown: Black|Anthracite|Wolf Grey|White
            </p>
            <p className="pra-link">. Style: IB1895-002</p>
            <p style={{ textDecoration: "underline", fontSize: "17px" }}>
              View Product Details
            </p>
            <p>Check delivery date</p>
            <p
              style={{ fontSize: "14px", color: "gray", paddingBottom: "2px" }}
            >
              Enter pincode to know exact delivery dates/charges
            </p>
            <input type="text" placeholder="Pincode" />
          </div>
          <div className="card-title">
            <p style={{ fontSize: "15px" }}>14-day return and size exchange</p>
            <p style={{ fontSize: "15px" }}>Know More</p>
          </div>
          <div className="card-title">
            <p style={{ fontSize: "15px" }}>Free delivery available</p>
            <p style={{ fontSize: "15px" }}>Know More</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopingcard;
