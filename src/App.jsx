import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Deshboard from "./component/Deshboard";
import AddProduct from "./component/Dashbord-component/AddProduct";
import Viweproduct from "./component/Dashbord-component/Viweproduct";
import Edit from "./component/Dashbord-component/Edit";

import Men from "./shoping/Men";
import Shoesall from "./shoping/Shoesall";
import Jorden from "./shoping/Jorden";
import Running from "./shoping/Running";
import Gym from "./shoping/Gym&Tranning";
import Hoodies from "./shoping/Hoodies";
import Jackets from "./shoping/Jackets";
import Shirt from "./shoping/Shirt";
import Shorts from "./shoping/Shorts";
import Jursey from "./shoping/Jursey";
import Shopingcard from "./shoping/Shopingcard";
import Cart from "./shoping/Cart";

export const Boss = createContext();
const App = () => {
  const [usersave, setusersave] = useState(null);
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Boss.Provider value={{ usersave, setusersave, cart, setCart }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Deshboard />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/viweproduct" element={<Viweproduct />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/men" element={<Men />} />
            <Route path="/allshoes" element={<Shoesall />} />
            <Route path="/jorden" element={<Jorden />} />
            <Route path="/running" element={<Running />} />
            <Route path="/gym&tranning" element={<Gym />} />
            <Route path="/hoodies" element={<Hoodies />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/shirt" element={<Shirt />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/jurseys" element={<Jursey />} />
            <Route path="/shopingcard/:id" element={<Shopingcard />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <ToastContainer
            position="top-right"
            autoClose={500}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
          />
        </BrowserRouter>
      </Boss.Provider>
    </div>
  );
};

export default App;
