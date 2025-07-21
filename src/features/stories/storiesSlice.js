import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStories, fetchStoryDetails } from "./storiesAPI";

const initialState = {
  stories: [],
  selectedStory: null,
  status: "idle",
  error: null,
};

export const getStories = createAsyncThunk(
  "stories/getStories",
  async (_, thunkAPI) => {
    return await fetchStories();
  }
);

export const getStoryDetails = createAsyncThunk(
  "stories/getStoryDetails",
  async (id, thunkAPI) => {
    return await fetchStoryDetails(id);
  }
);

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setSelectedStory(state, action) {
      state.selectedStory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stories = action.payload;
      })
      .addCase(getStories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getStoryDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStoryDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedStory = action.payload;
      })
      .addCase(getStoryDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSelectedStory } = storiesSlice.actions;
export default storiesSlice.reducer;