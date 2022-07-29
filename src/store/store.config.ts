import {configureStore} from '@reduxjs/toolkit'
import {reducer as SlackChannelReducer} from '../modules/slice/SlackChannelSlice.slice';
import {reducer as SlackChannelListReducer} from '../modules/slice/SlackChannelListSlice.slice';
import {reducer as SlackUserCommentListReducer} from '../modules/slice/SlackUserCommentListSlice.slice';

export const store = configureStore({
  reducer: {
    SlackChannel: SlackChannelReducer,
    SlackChannelList: SlackChannelListReducer,
    SlackUserCommentListReducer: SlackUserCommentListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

