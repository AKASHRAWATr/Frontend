import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Boss } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { usersave, setusersave } = useContext(Boss);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await axios.post(
      "https://backend-o6x8.onrender.com/products/create",

      data,

      {
        headers: {
          Authorization: `Bearer ${usersave?.token}`,
        },
      }
    );
    toast.success("Product Added Successfully 🎉");
    console.log(res.data);
    navigate("/viweproduct");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setusersave(null);
    navigate("/login");
  };

  return (
    <>
      <div className="app">
        <aside className="sidebar">
          <div className="logo">Product Admin</div>

          <nav>
            {/* <a href="/dashboard">Dashboard</a> */}
            <Link to="/dashboard">Dashboard</Link>
            <a className="active" href="#">
              Add Product
            </a>{" "}
            <Link to="/">Home</Link>
            <Link to="/viweproduct">ViweProducct</Link>
            {/* S */}
            <a href="#" onClick={logout}>
              Logout
            </a>
          </nav>
        </aside>

        <main className="main">
          <div className="header">
            <h1>Add Product</h1>
            <p>Create a new product using all product fields.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="product-form">
            <div className="form-grid">
              <label>
                Product Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Wireless Mouse"
                  required
                  {...register("name")}
                />
              </label>

              <label>
                Brand
                <input
                  type="text"
                  name="brand"
                  placeholder="Logitech"
                  {...register("brand")}
                />
              </label>

              <label>
                Category
                <select {...register("category")}>
                  <option value="shoes">shoes</option>
                  <option value="clothes">clothes</option>
                </select>
              </label>
              <label>
                Category's
                <select {...register("categorys")}>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Jorden">Jorden</option>
                  <option value="Running">Running</option>
                  <option value="Gym&Tranning">Gym&Tranning</option>
                  <option value="Tennis">Tennis</option>
                  <option value="top&T-shirt">top&T-shirt</option>
                  <option value="Shorts">Shorts</option>
                  <option value="Hoodies">Hoodies</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Jerseys">Jerseys</option>
                </select>
              </label>
              <label>
                Price *
                <input
                  type="number"
                  name="price"
                  placeholder="999"
                  required
                  {...register("price")}
                />
              </label>

              <label>
                Currency
                <select name="currency" {...register("currency")}>
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </label>

              <label>
                Stock
                <input
                  type="number"
                  name="stock"
                  placeholder="25"
                  {...register("stock")}
                />
              </label>

              <label>
                Rating
                <input
                  type="number"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="4.5"
                  {...register("rating")}
                />
              </label>

              <label>
                SKU
                <input
                  type="text"
                  name="sku"
                  placeholder="MOUSE-001"
                  {...register("sku")}
                />
              </label>

              <label className="full">
                Image URL
                <input
                  type="url"
                  name="image"
                  placeholder="https://example.com/product.jpg"
                  {...register("image")}
                />
              </label>

              <label className="full">
                Description
                <textarea
                  name="description"
                  rows="4"
                  placeholder="Enter product description"
                  {...register("description")}
                ></textarea>
              </label>
            </div>

            <button type="submit">Add Product</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default AddProduct;
