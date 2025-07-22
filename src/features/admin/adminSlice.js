import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAdminStatsAPI,
  getPendingCharitiesAPI,
  approveCharityAPI,
  rejectCharityAPI
} from './adminAPI';

// Thunks
export const fetchAdminStats = createAsyncThunk(
  'admin/fetchStats',
  async (_, thunkAPI) => {
    try {
      const res = await getAdminStatsAPI();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const fetchPendingCharities = createAsyncThunk(
  'admin/fetchPendingCharities',
  async (_, thunkAPI) => {
    try {
      const res = await getPendingCharitiesAPI();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const approveCharity = createAsyncThunk(
  'admin/approveCharity',
  async (id, thunkAPI) => {
    try {
      await approveCharityAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const rejectCharity = createAsyncThunk(
  'admin/rejectCharity',
  async (id, thunkAPI) => {
    try {
      await rejectCharityAPI(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Slice
const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    stats: {},
    pendingCharities: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Dashboard Stats
      .addCase(fetchAdminStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(fetchAdminStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Pending Charities
      .addCase(fetchPendingCharities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPendingCharities.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingCharities = action.payload;
      })
      .addCase(fetchPendingCharities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Approve Charity
      .addCase(approveCharity.fulfilled, (state, action) => {
        state.pendingCharities = state.pendingCharities.filter(c => c.id !== action.payload);
      })
      // Reject Charity
      .addCase(rejectCharity.fulfilled, (state, action) => {
        state.pendingCharities = state.pendingCharities.filter(c => c.id !== action.payload);
      });
  }
});

export default adminSlice.reducer;
