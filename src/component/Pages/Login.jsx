import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Navbar } from "../Navbar";
import facebook from "../Pages/SVG/facebook.svg";
import google from "../Pages/SVG/google.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { login, reset } from "../../redux/auth/authSlice";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      if (user.account.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
      toast.success("Logged in");
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  console.log(message);

  const loginSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

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
                  <NavLink to="/signup" class="register-link">
                    Create
                  </NavLink>
                  account
                </p>
              </div>
              <form method="POST" onSubmit={loginSubmit}>
                <div class="input-box">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="input-box">
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="remember_me">
                  <a href="/">forgot password?</a>
                </div>
                <button type="submit" className="btn_">
                  {isLoading ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                  ) : (
                    "Sign in"
                  )}
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
