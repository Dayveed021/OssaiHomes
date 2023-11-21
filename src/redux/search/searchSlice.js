import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchService from "./searchService";

const initialState = {
  data: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const searchProperties = createAsyncThunk(
  "search/filter",
  async ({ location, type, category, city }) => {
    const response = await searchService.searchProperty.get(
      `/search?propertyLocation=${location}&type=${type}&category=${category}&city=${city}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const searchSlice = createSlice({
  name: "search",
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
      .addCase(searchProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(searchProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = searchSlice.actions;
export default searchSlice.reducer;
