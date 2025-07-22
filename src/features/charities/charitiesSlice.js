import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCharitiesAPI,
  fetchCharityByIdAPI,
  applyCharityAPI
} from './charitiesAPI';

// Async Thunks
export const fetchCharities = createAsyncThunk(
  'charities/fetchCharities',
  async (_, thunkAPI) => {
    try {
      const res = await fetchCharitiesAPI();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCharityById = createAsyncThunk(
  'charities/fetchCharityById',
  async (id, thunkAPI) => {
    try {
      const res = await fetchCharityByIdAPI(id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const applyCharity = createAsyncThunk(
  'charities/applyCharity',
  async (formData, thunkAPI) => {
    try {
      const res = await applyCharityAPI(formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Initial State
const initialState = {
  charities: [],
  selectedCharity: null,
  loading: false,
  error: null,
  successMessage: null
};

// Slice
const charitiesSlice = createSlice({
  name: 'charities',
  initialState,
  reducers: {
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharities.fulfilled, (state, action) => {
        state.loading = false;
        state.charities = action.payload;
      })
      .addCase(fetchCharities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCharityById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharityById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCharity = action.payload;
      })
      .addCase(fetchCharityById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(applyCharity.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(applyCharity.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = 'Application submitted successfully!';
      })
      .addCase(applyCharity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

// Export
export const { clearMessages } = charitiesSlice.actions;
export default charitiesSlice.reducer;

