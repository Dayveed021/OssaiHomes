import axios from "axios";

const REGISTER_API = "https://homelanda-1d0d1907d8ae.herokuapp.com/v1/users";
const LOGIN_API = "https://homelanda-1d0d1907d8ae.herokuapp.com/v1/auth";

//Register user

const register = async (userData) => {
  const response = await axios.post(REGISTER_API, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
  }
  return response.data;
};

//Login User

const login = async (userData) => {
  const response = await axios.post(LOGIN_API, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("id", JSON.stringify(response.data.account._id));
    localStorage.setItem(
      "token",
      JSON.stringify(response.data.account.access_token)
    );
  }
  return response.data;
};

//logout user

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
