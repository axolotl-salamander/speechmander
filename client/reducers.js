import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  render: 0, // => 1,2,3
  isPlaying: false, //=> true when PLAY is pressed
};

const audioSlice = createSlice({
  name: 'audio',
  initialState
});

// export default reducers;
export default audioSlice;