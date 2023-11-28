import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import facebook from "../Pages/SVG/facebook.svg";
import google from "../Pages/SVG/google.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../../redux/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Registered Successfully");
      navigate("/login");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
        mobile,
      };
      dispatch(register(userData));
    }
    console.log("clicked");
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
              <form method="POST" onSubmit={registerUser}>
                <div className="input-box_register">
                  <input
                    type="text"
                    required
                    placeholder="First and Last Names"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="Phone number"
                    required
                    placeholder="Phone Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    required
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
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
                    {isLoading ? (
                      <FontAwesomeIcon icon={faSpinner} spin />
                    ) : (
                      "Sign Up"
                    )}
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
