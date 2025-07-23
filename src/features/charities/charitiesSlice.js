import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCharities, getCharityById, applyAsCharity } from './charitiesAPI';

// Thunks (using mock logic)
export const fetchCharities = createAsyncThunk(
  'charities/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await getAllCharities();
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchCharityDetails = createAsyncThunk(
  'charities/fetchById',
  async (id, thunkAPI) => {
    try {
      const res = await getCharityById(id);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);

    }
  }
);

export const submitCharityApplication = createAsyncThunk(
  'charities/submitApplication',
  async (data, thunkAPI) => {
    try {
      const res = await applyAsCharity(data);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const charitiesSlice = createSlice({
  name: 'charities',
  initialState: {
    list: [],
    selected: null,
    loading: false,
    error: null,
    applySuccess: false,
  },
  reducers: {
    clearCharityMessages: (state) => {
      state.error = null;
      state.applySuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharities.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCharities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCharityDetails.pending, (state) => {
        state.loading = true;
        state.selected = null;
      })
      .addCase(fetchCharityDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selected = action.payload;
      })
      .addCase(fetchCharityDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(submitCharityApplication.pending, (state) => {
        state.loading = true;
        state.applySuccess = false;
      })
      .addCase(submitCharityApplication.fulfilled, (state) => {
        state.loading = false;
        state.applySuccess = true;
      })
      .addCase(submitCharityApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { clearCharityMessages } = charitiesSlice.actions;
export default charitiesSlice.reducer;


