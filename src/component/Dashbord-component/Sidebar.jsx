import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Boss } from "../../App";
const Sidebar = () => {
  const { usersave, setusersave } = useContext(Boss);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    setusersave(null);
    navigate("/login");
  };
  return (
    <aside class="sidebar">
      <div class="logo">MyApp</div>

      <nav>
        <a href="#" class="active">
          Dashboard
        </a>
        <Link to="/addproduct">CreateProduct</Link>
        {/* <a href="#">CreateProduct</a> */}
        <Link to="/">Home</Link>
        <Link to="/viweproduct">ViweProduct</Link>
        {/* <Link to="/edit/:id}">Edit</Link> */}
        <a href="#" onClick={logout}>
          Logout
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
