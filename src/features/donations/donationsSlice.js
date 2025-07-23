import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitDonationAPI, fetchDonationHistoryAPI } from './donationsAPI';

export const makeDonation = createAsyncThunk(
  'donations/makeDonation',
  async (data, thunkAPI) => {
    try {
      const res = await submitDonationAPI(data);
      return res.data.donation;
    } catch (err) {
      return thunkAPI.rejectWithValue('Failed to process donation');
    }
  }
);

export const fetchDonationHistory = createAsyncThunk(
  'donations/fetchDonationHistory',
  async (_, thunkAPI) => {
    try {
      const res = await fetchDonationHistoryAPI();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Failed to load donation history');
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
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makeDonation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeDonation.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = 'Donation successful!';
        state.history = [...state.history, action.payload];
      })
      .addCase(makeDonation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
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

