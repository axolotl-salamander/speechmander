import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './slice.js';

const store = configureStore({
  reducer: {
    audio: audioReducer
  }
});

export default store;
