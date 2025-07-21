import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Mock data
const mockCharities = [
  { id: 1, name: "Charity One", description: "Helping girls in STEM." },
  { id: 2, name: "Charity Two", description: "Supporting education." },
];

export const fetchCharities = createAsyncThunk(
  "charities/fetchCharities",
  async () => {
    // Return mock data
    return mockCharities;
  }
);

export const fetchCharityDetails = createAsyncThunk(
  "charities/fetchCharityDetails",
  async (id) => {
    // Return mock data
    return mockCharities.find((charity) => charity.id === id);
  }
);

export const applyCharity = createAsyncThunk(
  "charities/applyCharity",
  async (form) => {
    // Return mock data
    return { ...form, id: mockCharities.length + 1 };
  }
);

const charitiesSlice = createSlice({
  name: "charities",
  initialState: {
    charities: [],
    selectedCharity: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setSelectedCharity(state, action) {
      state.selectedCharity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.charities = action.payload;
      })
      .addCase(fetchCharities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCharityDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharityDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCharity = action.payload;
      })
      .addCase(fetchCharityDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(applyCharity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(applyCharity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.charities = [...state.charities, action.payload];
      })
      .addCase(applyCharity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCharity } = charitiesSlice.actions;
export default charitiesSlice.reducer;

