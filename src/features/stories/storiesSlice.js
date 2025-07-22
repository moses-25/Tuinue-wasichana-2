import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllStoriesAPI, getStoryByIdAPI } from './storiesAPI';

// Thunk to fetch all stories
export const fetchStories = createAsyncThunk(
  'stories/fetchStories',
  async (_, thunkAPI) => {
    try {
      const res = await getAllStoriesAPI();
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Thunk to fetch a single story by ID
export const fetchStoryById = createAsyncThunk(
  'stories/fetchStoryById',
  async (id, thunkAPI) => {
    try {
      const res = await getStoryByIdAPI(id);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    stories: [],
    selectedStory: null,
    loading: false,
    error: null
  },
  reducers: {
    clearStoryError: (state) => {
      state.error = null;
    },
    clearSelectedStory: (state) => {
      state.selectedStory = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.loading = false;
        state.stories = action.payload;
      })
      .addCase(fetchStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchStoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedStory = null;
      })
      .addCase(fetchStoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedStory = action.payload;
      })
      .addCase(fetchStoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearStoryError, clearSelectedStory } = storiesSlice.actions;
export default storiesSlice.reducer;
