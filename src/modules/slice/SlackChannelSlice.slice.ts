import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// type
import { SlackChannelListTableType } from '../../components/organisms/Slack/channel/SlackChannelListTable/SlackChannelListTable.type'
// import { OptionListType } from '../../components/atoms/SelectBox/OptionList.type';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const INITIAL_STATE = {} as SlackChannelListTableType

const slice = createSlice({
  name: 'SlackChannel',
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  initialState: {} as SlackChannelListTableType,
  reducers: {
    setState: (state: SlackChannelListTableType, action: PayloadAction<SlackChannelListTableType>) => {
      Object.assign(state, action.payload)
    },
    replaceState: (_state, action: PayloadAction<SlackChannelListTableType>) => action.payload,
    initState: () => INITIAL_STATE
  }
})

export const { actions, reducer } = slice
export const { setState } = actions
