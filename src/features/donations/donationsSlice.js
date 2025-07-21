import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeDonation, getDonations } from "./donationsAPI";

const initialState = {
  donations: [],
  status: "idle",
  error: null,
};

export const fetchDonations = createAsyncThunk(
  "donations/fetchDonations",
  async (_, thunkAPI) => {
    return await getDonations();
  }
);

export const submitDonation = createAsyncThunk(
  "donations/submitDonation",
  async (form, thunkAPI) => {
    return await makeDonation(form);
  }
);

const donationsSlice = createSlice({
  name: "donations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDonations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.donations = action.payload;
      })
      .addCase(fetchDonations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(submitDonation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitDonation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.donations.unshift(action.payload);
      })
      .addCase(submitDonation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default donationsSlice.reducer;