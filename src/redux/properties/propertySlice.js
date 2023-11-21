import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import propertyService from "./propertyService";

const initialState = {
  data: [],
  allData: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const allProperties = createAsyncThunk(
  "property/all",
  async (_, thunkApi) => {
    try {
      return await propertyService.AllProperties();
    } catch (error) {
      const defaultMessage = "An error occurred. Please try again.";
      let message = defaultMessage;

      if (error.response && error.response.data && error.response.data.msg) {
        message = error.response.data.msg; // Use the 'msg' property from the response
      }
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const singleProperty = createAsyncThunk(
  "property/single",
  async (propertyId) => {
    const response = await propertyService.singleProperty.get(`/${propertyId}`);
    console.log(response.data);
    return response.data;
  }
);

export const propertySlice = createSlice({
  name: "property",
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
      .addCase(allProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allData = action.payload;
      })
      .addCase(allProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(singleProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singleProperty.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(singleProperty.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = propertySlice.actions;
export default propertySlice.reducer;
