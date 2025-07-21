import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPendingCharities,
  approveCharity,
  rejectCharity,
  fetchAdminStats,
  fetchRecentCharities,
  fetchRecentDonations,
} from "./adminAPI";

const initialState = {
  stats: {},
  pendingCharities: [],
  recentCharities: [],
  recentDonations: [],
  status: "idle",
  error: null,
};

export const getPendingCharities = createAsyncThunk(
  "admin/getPendingCharities",
  async () => {
    return await fetchPendingCharities();
  }
);

export const approveCharityById = createAsyncThunk(
  "admin/approveCharityById",
  async (id) => {
    await approveCharity(id);
    return id;
  }
);

export const rejectCharityById = createAsyncThunk(
  "admin/rejectCharityById",
  async (id) => {
    await rejectCharity(id);
    return id;
  }
);

export const getAdminStats = createAsyncThunk(
  "admin/getAdminStats",
  async () => {
    return await fetchAdminStats();
  }
);

export const getRecentCharities = createAsyncThunk(
  "admin/getRecentCharities",
  async () => {
    return await fetchRecentCharities();
  }
);

export const getRecentDonations = createAsyncThunk(
  "admin/getRecentDonations",
  async () => {
    return await fetchRecentDonations();
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPendingCharities.fulfilled, (state, action) => {
        state.pendingCharities = action.payload;
      })
      .addCase(approveCharityById.fulfilled, (state, action) => {
        state.pendingCharities = state.pendingCharities.filter(
          (c) => c.id !== action.payload
        );
      })
      .addCase(rejectCharityById.fulfilled, (state, action) => {
        state.pendingCharities = state.pendingCharities.filter(
          (c) => c.id !== action.payload
        );
      })
      .addCase(getAdminStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      })
      .addCase(getRecentCharities.fulfilled, (state, action) => {
        state.recentCharities = action.payload;
      })
      .addCase(getRecentDonations.fulfilled, (state, action) => {
        state.recentDonations = action.payload;
      });
  },
});

export default adminSlice.reducer;