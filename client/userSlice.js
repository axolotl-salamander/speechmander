import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  sessionData: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  userLoggedIn: (state, action) => {
    state.isLoggedIn = true;
  },
  updateSessionData: (state, action) => {
    state.sessionData.push(action.payload);
  },
});
export default userSlice.reducer;
