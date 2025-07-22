import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitDonationAPI, fetchDonationHistoryAPI } from './donationsAPI';

// Thunk: Make a donation
export const makeDonation = createAsyncThunk(
  'donations/makeDonation',
  async (data, thunkAPI) => {
    try {
      const res = await submitDonationAPI(data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Thunk: Fetch donation history
export const fetchDonationHistory = createAsyncThunk(
  'donations/fetchDonationHistory',
  async (_, thunkAPI) => {
    try {
      const res = await fetchDonationHistoryAPI();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const donationsSlice = createSlice({
  name: 'donations',
  initialState: {
    history: [],
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearDonationMessages: (state) => {
      state.successMessage = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Make donation
      .addCase(makeDonation.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(makeDonation.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = 'Donation successful!';
      })
      .addCase(makeDonation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch history
      .addCase(fetchDonationHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDonationHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload;
      })
      .addCase(fetchDonationHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearDonationMessages } = donationsSlice.actions;
export default donationsSlice.reducer;
