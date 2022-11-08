import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// type
import { SlackChannelListTableType } from '../../components/organisms/Slack/channel/SlackChannelListTable/SlackChannelListTable.type'
// import { OptionListType } from '../../components/atoms/SelectBox/OptionList.type';

const slice = createSlice({
  name: 'SlackChannelList',
  initialState: [] as SlackChannelListTableType[],
  reducers: {
    setState: (state, action: PayloadAction<SlackChannelListTableType[]>) => {
      Object.assign(state, action.payload)
    }
  }
})

export const { actions, reducer } = slice
export const { setState } = actions
