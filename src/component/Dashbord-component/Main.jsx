import React, { useContext } from "react";
import { Boss } from "../../App";

const Main = () => {
  const { usersave, setusersave } = useContext(Boss);
  console.log(usersave);

  return (
    <>
      <main className="content">
        <h1>{usersave?.role} Dashboard</h1>
        <p>This is the main content area.</p>
        <div className="user-card">
          <div className="user-top">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="User"
              className="user-img"
            />

            <div>
              <h3>Akash rawat</h3>
              <p>{usersave?.email}</p>
            </div>
          </div>

          <div className="user-info">
            <p>
              <b>Phone:</b> +91 98765 43210
            </p>
            <p>
              <b>Total Orders:</b> 4
            </p>
            <p>
              <b>Total Spent:</b> ₹12,499
            </p>
          </div>

          <h4>Purchased Items</h4>

          <div className="order-list">
            <div className="order">
              <span>Wireless Headphones</span>
              <b>₹2,499</b>
            </div>

            <div className="order">
              <span>Smart Watch</span>
              <b>₹4,999</b>
            </div>

            <div className="order">
              <span>Phone Cover</span>
              <b>₹499</b>
            </div>

            <div className="order">
              <span>Bluetooth Speaker</span>
              <b>₹4,502</b>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
