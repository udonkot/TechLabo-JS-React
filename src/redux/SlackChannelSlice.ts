import { createSlice} from '@reduxjs/toolkit'
//import { SlackChannelListTableType } from '../components/molecules/SlackChannelListTable/SlackChannelListTable.type'

export const SlackChannelSlice = createSlice({
  name: 'SlackChannel',
  initialState: {
    test : 'default',
    count: 0,
  },
  reducers: {
    setSlackChannel: (state) => {
      state.test = 'hoge'
    },
    increase: (state) => {
      state.count += 1;
    },
    
  }
})

export const {setSlackChannel, increase } = SlackChannelSlice.actions;

export default SlackChannelSlice.reducer