import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCharities, applyCharity, fetchCharityDetails } from "./charitiesAPI";

const initialState = {
  charities: [],
  selectedCharity: null,
  status: "idle",
  error: null,
};

export const getCharities = createAsyncThunk(
  "charities/getCharities",
  async (_, thunkAPI) => {
    return await fetchCharities();
  }
);

export const getCharityDetails = createAsyncThunk(
  "charities/getCharityDetails",
  async (id, thunkAPI) => {
    return await fetchCharityDetails(id);
  }
);

export const submitCharityApplication = createAsyncThunk(
  "charities/submitCharityApplication",
  async (form, thunkAPI) => {
    return await applyCharity(form);
  }
);

const charitiesSlice = createSlice({
  name: "charities",
  initialState,
  reducers: {
    setSelectedCharity(state, action) {
      state.selectedCharity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.charities = action.payload;
      })
      .addCase(getCharities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCharityDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharityDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCharity = action.payload;
      })
      .addCase(getCharityDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(submitCharityApplication.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitCharityApplication.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(submitCharityApplication.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCharity } = charitiesSlice.actions;
export default charitiesSlice.reducer;