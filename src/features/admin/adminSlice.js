import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAdminStatsAPI, getPendingCharitiesAPI, approveCharityAPI, rejectCharityAPI } from './adminAPI';

export const fetchAdminStats = createAsyncThunk(
  'admin/fetchStats',
  async (_, thunkAPI) => {
    try {
      const res = await getAdminStatsAPI();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
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
      return thunkAPI.rejectWithValue(err.message);
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
      return thunkAPI.rejectWithValue(err.message);
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
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

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
      .addCase(approveCharity.fulfilled, (state, action) => {
        state.pendingCharities = state.pendingCharities.filter(
          (c) => c.id !== action.payload
        );
      })
      .addCase(rejectCharity.fulfilled, (state, action) => {
        state.pendingCharities = state.pendingCharities.filter(
          (c) => c.id !== action.payload
        );
      });
  },
});

export default adminSlice.reducer;

