import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import SlackChannelReducer from './SlackChannelSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: SlackChannelReducer,
  },
});