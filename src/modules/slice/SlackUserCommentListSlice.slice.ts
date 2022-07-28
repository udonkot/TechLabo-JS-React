import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// type
import { UserCommentListType } from '../../components/molecules/SlackCommentSummaryTable/UserCommentList.type';


const slice = createSlice({
  name: 'SlackUserCommentList',
  initialState: [] as UserCommentListType[][],
  reducers: {
    setState: (state, action:PayloadAction<Array<UserCommentListType>>) => {
      Object.assign(state, action.payload)
    }
  },
});

export const {actions, reducer} = slice;
export const {setState} = actions;
