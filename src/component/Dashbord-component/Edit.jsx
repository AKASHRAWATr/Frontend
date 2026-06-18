import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Boss } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Edit = () => {
  const { usersave } = useContext(Boss);
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const [save, setsave] = useState([]);
  useEffect(() => {
    const getProductById = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/products/${id}`, {
          headers: {
            Authorization: `Bearer ${usersave?.token}`,
          },
        });

        console.log(res.data);
        console.log(res);
        reset(res.data.products);
        setsave(res.data.product);
      } catch (error) {
        console.log(error);
      }
    };

    getProductById();
  }, [id, usersave, reset]);

  const onSubmit = async (data) => {
    try {
      await axios.patch(`http://localhost:3000/products/edit/${id}`, data, {
        headers: {
          Authorization: `Bearer ${usersave?.token}`,
        },
      });

      toast.success("Product Updated Successfully 🎉");

      navigate("/viweproduct");
    } catch (error) {
      console.log(error);
      toast.error("Update Failed ❌");
    }
  };

  return (
    <>
      <div className="app">
        <aside className="sidebar">
          <div className="logo">Product Admin</div>

          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/addproduct">Create Product</Link>
            <Link to="/">Home</Link>
            <Link to="/viweproduct">View Product</Link>
          </nav>
        </aside>

        <main className="main">
          <div className="header">
            <h1>Edit Product</h1>
            <p>Update your product details</p>
          </div>

          <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-grid">
              <label>
                Product Name *
                <input
                  type="text"
                  placeholder="Wireless Mouse"
                  {...register("name")}
                />
              </label>

              <label>
                Brand
                <input
                  type="text"
                  placeholder="Logitech"
                  {...register("brand")}
                />
              </label>

              <label>
                Category
                <select {...register("category")}>
                  <option value="shoes">Shoes</option>
                  <option value="clothes">Clothes</option>
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
                Price
                <input type="number" placeholder="999" {...register("price")} />
              </label>

              <label>
                Currency
                <select {...register("currency")}>
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </label>

              <label>
                Stock
                <input type="number" placeholder="25" {...register("stock")} />
              </label>

              <label>
                Rating
                <input
                  type="number"
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
                  placeholder="MOUSE-001"
                  {...register("sku")}
                />
              </label>

              <label className="full">
                Image URL
                <input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  {...register("image")}
                />
              </label>

              <label className="full">
                Description
                <textarea
                  rows="4"
                  placeholder="Enter product description"
                  {...register("description")}
                />
              </label>
            </div>

            <button type="submit">Update Product</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Edit;
