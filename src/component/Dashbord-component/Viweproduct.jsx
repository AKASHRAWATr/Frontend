import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

import { Boss } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Viweproduct = () => {
  const { usersave, setusersave } = useContext(Boss);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "https://backend-o6x8.onrender.com/products/",
          {
            headers: {
              Authorization: `Bearer ${usersave?.token}`,
            },
          }
        );
        console.log(res);
        setProducts(res.data.products);
        // console.log("usersave:", usersave);
        // console.log("token:", usersave?.token);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

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
    // console.log("usersave:", usersave);
    // console.log("token:", usersave?.token);
  };

  const navigate = useNavigate();
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

            <Link to="/addproduct">CreateProduct</Link>
            <Link to="/">Home</Link>
            {/* <Link to="/viweproduct">ViweProduct</Link> */}
            {/* <Link to="/edit">Edit</Link> */}
            <a href="#" onClick={logout}>
              Logout
            </a>
          </nav>
        </aside>

        <main className="main">
          <div className="header">
            <h1>Viwe Product History</h1>
            <p>See you all product details</p>
          </div>
          <div class="table-container">
            <h2>Product List</h2>

            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Category</th>
                  <th>Categorys</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <img src={product.image} alt={product.name} width="60" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                    <td>{product.category}</td>
                    <td>{product.categorys}</td>
                    <td>₹{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                      <button onClick={() => handleDelete(product._id)}>
                        <i class="ri-delete-bin-fill"></i>
                      </button>
                    </td>
                    <td>
                      <button onClick={() => navigate(`/edit/${product._id}`)}>
                        <i class="ri-pencil-ai-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default Viweproduct;
