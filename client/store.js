import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './slice.js';
import userReducer from './userSlice.js';

const store = configureStore({
  reducer: {
    audio: audioReducer,
    user: userReducer,
  },
});

export default store;
