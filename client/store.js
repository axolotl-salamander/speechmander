import { configureStore } from '@reduxjs/toolkit';
// import * as StoreCreator from 'redux';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import audioSlice from './reducers.js';

// export default store = configureStore({
//   reducer: {
//     audioSlice
//   }
// });

const store = configureStore({
  reducer: {
    audioSlice
  }
});

export default store;
