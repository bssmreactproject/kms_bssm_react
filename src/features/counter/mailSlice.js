import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
        state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;}
    ,
  },
});

export const {openSendMessage, closeSendMessage} = counterSlice.actions;
export const selectSendMessage = (state) => state.mail.sendMessageIsOpen;

export default counterSlice.reducer;
