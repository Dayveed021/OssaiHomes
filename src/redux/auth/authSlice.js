import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      return await authService.register(user);
    } catch (error) {
      let message = "An error occurred"; // Default error message

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        message = error.response.data.message; // Use the 'message' property from the response
      } else if (error.message) {
        message = error.message; // If there's an error message in the error object
      }

      return thunkApi.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    return await authService.login(user);
  } catch (error) {
    let message = "An error occurred"; // Default error message

    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message; // Use the 'message' property from the response
    } else if (error.message) {
      message = error.message; // If there's an error message in the error object
    }

    return thunkApi.rejectWithValue(message);
  }
});

// Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
