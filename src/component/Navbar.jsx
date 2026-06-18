import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { Boss } from "../App";
const Navbar = () => {
  const { usersave, setusersave, cart, setcard } = useContext(Boss);
  console.log(cart);

  const logout = () => {
    setusersave(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <header class="topbar">
        <nav class="topnav">
          <a href="#">Help</a>
          <span>|</span>
          {/* <a href="#">Sign Up</a> */}

          {usersave && (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <span>|</span>
            </>
          )}

          {usersave ? (
            <Link to="/login" onClick={logout}>
              Logout
            </Link>
          ) : (
            <>
              <Link to="/register">Sign Up</Link>
              <span>|</span>
              <Link to="/login">Log In</Link>
            </>
          )}
        </nav>
      </header>
      <header className="secondbar">
        <img
          src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/nike-logo-192x192.svg"
          alt=""
        />
        <div className="secondcolumbar">
          <nav class="secondnav">
            <a href="#">New & Featured</a>
            {/* <Link to="/men">Men</Link> */}
            <li className="nav-item">
              <Link to="/men">Men</Link>

              <div className="mega-menu">
                <div>
                  <h3>Featured</h3>
                  <p>New Arrivals</p>
                  <p>Bestsellers</p>
                  <p>Shop All Sale</p>
                  <p>All Conditions Gear</p>
                </div>

                <div>
                  <h3>Shoes</h3>
                  <p>All Shoes</p>
                  <p>Lifestyle</p>
                  <p>Jordan</p>
                  <p>Running</p>
                </div>

                <div>
                  <h3>Clothing</h3>
                  <p>All Clothing</p>
                  <p>Tops & T-Shirts</p>
                  <p>Shorts</p>
                </div>

                <div>
                  <h3>Shop By Sport</h3>
                  <p>Running</p>
                  <p>Basketball</p>
                  <p>Football</p>
                </div>

                <div>
                  <h3>Accessories</h3>
                  <p>All Accessories</p>
                  <p>Bags & Backpacks</p>
                  <p>Socks</p>
                </div>
              </div>
            </li>
            {/* <a href="#">Men</a> */}
            <a href="#">women</a>
            <a href="#">kids</a> <a href="#">Jordan</a> <a href="#">sales</a>
          </nav>
          <div class="actions">
            <div class="search">
              <input type="search" placeholder="⌕ search" />
            </div>
            <div className="icon">
              <span>
                <i class="ri-service-line"></i>
              </span>
              <span>
                <Link to={"/cart"}>
                  <i class="ri-shopping-bag-line">{cart?.cart?.length}</i>{" "}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
