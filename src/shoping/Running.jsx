import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Boss } from "../App";

const Running = () => {
  const { usersave } = useContext(Boss);
  const [card, setcard] = useState([]);

  const getCard = async () => {
    const res = await axios.get("http://localhost:3000/products", {
      headers: {
        Authorization: `Bearer ${usersave?.token}`,
      },
    });

    setcard(res.data.products);
    console.log(res.data.products);
  };

  useEffect(() => {
    getCard();
  }, []);
  return (
    <>
      <Navbar></Navbar>

      <div className="app">
        <aside
          className="sidebar"
          style={{
            position: "fixed",
            top: "15%", // Navbar height
            left: "0",
            width: "250px",
            height: "calc(100vh - 70px)",
            overflowY: "auto",
            backgroundColor: "white",
            borderRight: "1px solid #ddd",
            padding: "20px",
            color: "black",
          }}
        >
          <div className="logo">Men's Shoes</div>

          <nav id="link">
            <Link style={{ color: "black" }} to="/dashboard">
              Dashboard
            </Link>
            <Link style={{ color: "black" }} to="/">
              Home
            </Link>
            <Link style={{ color: "black" }} to="/allshoes">
              AllShoes
            </Link>
            <Link style={{ color: "black" }} to="/running">
              Running
            </Link>
            <Link style={{ color: "black" }} to="/jorden">
              Jorden
            </Link>
            <Link style={{ color: "black" }} to="/gym&tranning">
              Gym&Traning
            </Link>

            <Link style={{ color: "black" }} to="/tennis">
              Tennis
            </Link>
            <Link style={{ color: "black" }} to="/shirt">
              T-shirt
            </Link>
            <Link style={{ color: "black" }} to="/shorts">
              Shorts
            </Link>

            <Link style={{ color: "black" }} to="/hoodies">
              Hoodies
            </Link>
            <Link style={{ color: "black" }} to="/jackets">
              Jackets
            </Link>
            <Link style={{ color: "black" }} to="/jurseys">
              Jerseys
            </Link>
          </nav>
        </aside>

        <main className="main">
          <div className="headerleft">
            <h4>
              Show Filter<i class="ri-equalizer-2-line"></i>
            </h4>
            <h4>Sort</h4>
          </div>

          <div className="shoping-card">
            {card
              .filter((item) => item.categorys === "Running")
              .map((item) => (
                <div className="shoping-card-1" key={item._id}>
                  <Link to={`/shopingcard/${item._id}`}>
                    <img src={item.image} alt={item.title} />
                  </Link>

                  {/* <img src={item.image} alt={item.title} /> */}

                  <span>
                    <i className="ri-poker-hearts-line"></i>
                  </span>

                  <p>
                    {item.category} for {item.categorys}
                  </p>
                  <p>Rating: {item.rating}</p>
                  <p
                    style={{
                      color: "gray",
                    }}
                  >
                    {item.description}
                  </p>

                  <p>₹{item.price}</p>
                </div>
              ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Running;
