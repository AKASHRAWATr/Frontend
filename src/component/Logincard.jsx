import { useState } from "react";
import Footer from "./Footer";

const Logincard = () => {
  return (
    <>
      <section class="benefits-section">
        <h1 class="benefits-title">Benefits</h1>

        <div class="benefits-container">
          <img
            src="https://images-static.nykaa.com/uploads/55ae9d10-a606-44ca-a003-403bcfec5f3e.png?tr=cm-pad_resize,w-300"
            alt=""
          />
          <img
            src="https://images-static.nykaa.com/uploads/55ae9d10-a606-44ca-a003-403bcfec5f3e.png?tr=cm-pad_resize,w-300"
            alt=""
          />{" "}
          <img
            src="https://images-static.nykaa.com/uploads/55ae9d10-a606-44ca-a003-403bcfec5f3e.png?tr=cm-pad_resize,w-300"
            alt=""
          />
        </div>
      </section>
      <div className="nice-text">
        <img
          src="https://images-static.nykaa.com/uploads/5798fd24-2b2e-41d6-a1f0-c1312af314d9.png?tr=cm-pad_resize,"
          alt=""
        />
      </div>
      <div className="nice-text-1">
        <img
          src="https://images-static.nykaa.com/uploads/790152ce-5c47-4dd6-9bd9-58231ef7d86e.png?tr=cm-pad_resize,w-900"
          alt=""
        />
      </div>
      <div className="nice-text-2">
        <img
          src="https://images-static.nykaa.com/uploads/1ba229df-2e0d-454b-89cf-2fe15f237d54.png?tr=cm-pad_resize,w-1800"
          alt=""
        />
      </div>

      <Footer></Footer>
      {/* <div className="register">
        <div className="input-feilds">
          <p>Name</p>
          <input type="name" placeholder="Enter you name" />
          <p>Email</p>
          <input type="email" placeholder="Enter you email" />
          <p>Password</p>
          <input type="password" placeholder="Enter you password" />
        </div>
      </div> */}

      {/* <div className="signup-container">
        <div className="signup-box">
          <span className="close-btn">×</span>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="nike-logo"
            className="nike-logo"
          />

          <h1>Sign up to get started</h1>

          <p className="subtitle">Get personalised picks & faster checkout</p>
          <div className="input-text">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button>submit</button>
          </div>

          <p className="terms">
            By entering this site, you agree to the
            <br />
            <span>Terms & Conditions</span> and
            <span> Privacy Policy</span>
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Logincard;
