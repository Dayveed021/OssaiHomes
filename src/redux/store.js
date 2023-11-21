import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.js";
import propertyReducer from "./properties/propertySlice.js";
import searchReducer from "./search/searchSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer,
    search: searchReducer,
  },
});
