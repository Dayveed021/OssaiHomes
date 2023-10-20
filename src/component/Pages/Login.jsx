import React from "react";
import { Navbar } from "../Navbar";
import facebook from "../Pages/SVG/facebook.svg";
import google from "../Pages/SVG/google.svg";

const Login = () => {
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
            <div class="form-box">
              <h2>Log into your account</h2>
              <div class="login-register">
                <p>
                  Or
                  <span class="register-link">Create</span>
                  account
                </p>
              </div>
              <form action="#">
                <div class="input-box">
                  <input type="email" required placeholder="Email Address" />
                </div>
                <div class="input-box">
                  <input type="password" required placeholder="Password" />
                </div>
                <div class="remember_me">
                  <a href="/">forgot password?</a>
                </div>
                <button type="submit" className="btn_">
                  Login
                </button>

                <div className="or">
                  <hr />
                  <p>OR</p>
                  <hr />
                </div>

                <div>
                  <span className="icons">
                    <button className="btn_icon">
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

export default Login;
