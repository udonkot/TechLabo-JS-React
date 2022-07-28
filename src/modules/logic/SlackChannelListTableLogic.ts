// reducerインポート
import {setState as setStateSlackChannelListTable} from '../slice/SlackChannelListSlice.slice'

// dispatchインポート
import { AppDispatch } from '../../store/store.config'

// type
import {SlackChannelListTableType} from '../../components/organisms/SlackChannelListTable/SlackChannelListTable.type'


// 
export const setSlackChannelListTable = (
  channelList: SlackChannelListTableType[],
  dispatch: AppDispatch,
) => {
  // データセット
  dispatch(setStateSlackChannelListTable(channelList))
}