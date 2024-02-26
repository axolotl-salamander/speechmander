import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  render: 1, // => 1,2,3
  isPlaying: false, //=> true when PLAY is pressed
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setRender: (state, action) => {
      console.log('setState hit: ', state, action.payload);
      state.render = action.payload;
    }
  }
});

// export default reducers;
export const { setRender } = audioSlice.actions;
export default audioSlice.reducer;