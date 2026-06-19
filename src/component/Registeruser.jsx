import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Boss } from "../App";
import { toast } from "react-toastify";

const Registeruser = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { usersave, setusersave } = useContext(Boss);
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onsubmit = async (data) => {
    console.log(data);
    let res = await axios.post(
      "https://backend-o6x8.onrender.com/auth/register",
      {
        ...data,
        role: "user",
      }
    );
    console.log(res.data);
    setusersave(res.data.user);
    setusersave(res.data.user.role);
    // navigate("/");
    toast.success(
      "Register Successful 🎉",
      setTimeout(() => {
        navigate("/");
      }, 1500)
    );
  };

  return (
    <>
      <div className="image">
        <img src="https://images-static.nykaa.com/uploads/b922ca2e-0fac-4d5e-983b-8859d8ff30cc.png?" />

        <div className="iamge-text">
          <div>
            <span>IT'S BETTER ON NIKE.IN</span>

            <p>Move, Shop and Celebrate with the best of Nike.</p>

            <button
              style={{
                background: "white",
                color: "black",

                borderRadius: "20px",
                width: "100px",
                height: "40px",
              }}
              className="btn-signup"
              onClick={() => setShowPopup(true)}
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}

      {showPopup && (
        <div className="signup-container">
          <div className="signup-box">
            <span className="close-btn" onClick={() => setShowPopup(false)}>
              ×
            </span>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="nike-logo"
              className="nike-logo"
            />

            <h1>Sign up to get started</h1>

            <p className="subtitle">Get personalised picks & faster checkout</p>

            {/* FORM */}
            <form className="input-text" onSubmit={handleSubmit(onsubmit)}>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name")}
              />

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />

              <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
              />

              <button
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid black",
                  borderRadius: "20px",
                  width: "100px",
                  height: "30px",
                }}
                type="submit"
              >
                Submit
              </button>
            </form>

            <p className="terms">
              By entering this site, you agree to the
              <br />
              <span>Terms & Conditions</span> and
              <span> Privacy Policy</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Registeruser;
