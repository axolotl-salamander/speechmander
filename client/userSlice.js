import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  sessionData: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.isLoggedIn = true;
    },
    updateSessionData: (state, action) => {
      state.sessionData.push(action.payload);
    },
  },
});

export const { updateSessionData } = userSlice.actions;
export default userSlice.reducer;
