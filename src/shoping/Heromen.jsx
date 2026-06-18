import { Link } from "react-router-dom";
import videoe from "../assets/vidssave.com THE MILLISECOND _ Nike Women's Running Spec Commercial _ Sony FX3 & FreeFly Ember S5K 720P.mp4";

const Heromen = () => {
  return (
    <>
      <div class="top-banner">
        <span>Enjoy 10% Off On The Nike App. Use: APP10</span>

        <div class="banner-links">
          <a href="#">Download Now</a>
          <a href="#">T&Cs</a>
        </div>
      </div>

      {/* next */}

      <nav className="menu-navbar">
        <h1 className="menu-title">Men</h1>

        <ul className="menu-links">
          <Link to={"/allshoes"}>Shoes</Link>

          {/* <li>
            <a href="/">Shoes</a>
          </li> */}
          <li>
            <a href="/">Clothing</a>
          </li>
          <li>
            <a href="/">Accessories</a>
          </li>
          <li>
            <a href="/">Shop All</a>
          </li>
        </ul>
      </nav>
      {/* next */}
      <div className="video">
        <video width="100%" autoPlay muted loop playsInline height="30%">
          <source src={videoe} type="video/mp4" />
        </video>
        <section className="video-text">
          <span>SAME WORKHORSE. NEW WINGS.</span>

          <p class="small-text">
            Get inside the mind—and under the feet—of Ethan Strand and Pegasus
            42.
          </p>
          <div className="button">
            <button className="btn">
              <Link
                to="/allshoes"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Shop
              </Link>
            </button>

            <button className="btn">
              <span>Watch⮞ </span>
            </button>
          </div>
        </section>
      </div>
      {/* next */}
      <div className="trending-container">
        <p>Shop by Sport</p>

        <div className="trending-images">
          <div className="sport">
            <img
              id="sport-image"
              src="https://images-static.nykaa.com/uploads/8be6fc4c-052a-4616-a05f-bef95da04dcd.png?tr=cm-pad_resize"
              alt="Running"
            />
            <p>Running</p>
          </div>

          <div className="sport">
            <img
              id="sport-image"
              src="https://images-static.nykaa.com/uploads/dfdff7a9-6225-41b8-8c5b-16a1979dabc1.png?tr=cm-pad_resize,w-300"
              alt="Training"
            />
            <p>Training</p>
          </div>

          <div className="sport">
            <img
              id="sport-image"
              src="https://images-static.nykaa.com/uploads/0d4b2ed9-0370-446f-8dcf-6954cf00ffe5.png?tr=cm-pad_resize,w-300"
              alt="Yoga"
            />
            <p>Yoga</p>
          </div>
        </div>
      </div>
      {/* next */}

      <h1
        style={{
          marginLeft: "2.8em",
          fontSize: "25px",
          fontWeight: "500",
        }}
      >
        Featured
      </h1>
      <div className="main-container">
        <div className="left-image">
          <img
            src="https://images-static.nykaa.com/uploads/104dbcf5-1137-4653-a427-43bfa23b12fb.png?tr=cm-pad_resize,w-450"
            alt=""
          />
        </div>
        <div className="right-image">
          <img
            src="https://images-static.nykaa.com/uploads/b751fd59-1fbc-4ae5-87a7-12332b5a1f7c.png?tr=cm-pad_resize,w-450"
            alt=""
          />
        </div>
      </div>
      {/* next */}

      <div id="trending-container">
        <p>Best Sellers</p>

        <div id="trending-images">
          <div id="sport">
            <img
              id="sport-image"
              src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-CT2302-100_1.jpg?tr=cm-pad_resize,w-500,h-500"
              alt="Running"
            />
            <div id="sport">
              <p>Nike Dunk Low Retro</p>
              <p style={{ color: "gray" }}>Men's Shoes</p>
              <p>₹8,295</p>
            </div>
          </div>

          <div id="sport">
            <img
              id="sport-image"
              src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-HF5441-007_1.jpg?tr=cm-pad_resize,w-500,h-500"
              alt="Training"
            />
            <div id="sport">
              <p>Nike Downshifter 14</p>
              <p style={{ color: "gray" }}>Men's Road Running shoe</p>
              <p>₹4,895</p>
            </div>
          </div>

          <div id="sport">
            <img
              id="sport-image"
              src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/5/3/5324c8eNike-HF5441-117_1.jpg?tr=cm-pad_resize,w-500,h-500"
              alt="Yoga"
            />
            <div id="sport">
              <p>Nike Dunk Low Retro</p>
              <p style={{ color: "gray" }}>Men's Shoes</p>
              <p>₹8,295</p>
            </div>
          </div>
        </div>
      </div>
      {/* next */}
      <div className="trending-container">
        <p>More to Explore</p>

        <div className="trending-images">
          <div className="sport">
            <img
              id="sport-image"
              src="https://images-static.nykaa.com/uploads/7523c373-253c-4d80-894d-808b78891bed.png?tr=cm-pad_resize,w-750"
              alt="Running"
            />
            <p>Footwear</p>
          </div>

          <div className="sport">
            <img
              id="sport-image"
              src="https://images-static.nykaa.com/uploads/3fffa156-c6c4-4b66-93fc-5cafd3c83036.png?tr=cm-pad_resize,w-300"
              alt="Training"
            />
            <p>Apparel</p>
          </div>

          <div className="sport">
            <img
              id="sport-image"
              src="https://images-static.nykaa.com/uploads/81233bef-0d20-4279-bd19-bb765ff2b6f5.png?tr=cm-pad_resize,w-300"
              alt="Yoga"
            />
            <p>Accessories</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heromen;
