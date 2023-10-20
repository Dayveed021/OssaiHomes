import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "./Footer";
import facebook from "../Pages/SVG/facebook.svg";
import google from "../Pages/SVG/google.svg";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="back_login">
          <div className="wrapper">
            <link
              href="https://fonts.cdnfonts.com/css/satoshi"
              rel="stylesheet"
            ></link>
            <div className="form-box register">
              <h2>Create an account</h2>
              <div className="register-login">
                <p>
                  Or
                  <NavLink to="/login" className="login-link">
                    Login
                  </NavLink>
                  to your account
                </p>
              </div>
              <form action="#">
                <div className="input-box_register">
                  <input type="text" required placeholder="First Name" />
                  <input type="text" required placeholder="Last Name" />
                </div>
                <div className="input-box">
                  <input type="email" required placeholder="Email Address" />
                </div>
                <div className="input-box">
                  <input type="password" required placeholder="Password" />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    required
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="t_c">
                  <label for="box">
                    <input type="checkbox" required />
                    <p>
                      I agree to the
                      <a href="/">terms & conditions</a>
                    </p>
                  </label>
                  <button type="submit" className="btn_">
                    Sign up
                  </button>
                </div>
                <div className="or">
                  <hr />
                  <p>OR</p>
                  <hr />
                </div>

                <div>
                  <span className="icons">
                    <button className="btn_icon">
                      {" "}
                      <img
                        src={google}
                        alt="google_icon"
                        className="img"
                        height={20}
                        width={20}
                      />
                      Log in with Google
                    </button>
                  </span>

                  <span className="icons">
                    <button className="btn_icon">
                      <img
                        src={facebook}
                        className="img"
                        alt="facebook_icon"
                        height={20}
                        width={20}
                      />
                      Log in with Facebook
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
