import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import charitiesReducer from '../features/charities/charitiesSlice';
import donationsReducer from '../features/donations/donationsSlice';
import storiesReducer from '../features/stories/storiesSlice';
import adminReducer from '../features/admin/adminSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    charities: charitiesReducer,
    donations: donationsReducer,
    stories: storiesReducer,
    admin: adminReducer,
  },
});

export default store;
