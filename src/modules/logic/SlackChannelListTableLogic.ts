// reducerインポート
import { setState as setStateSlackChannelListTable } from '../slice/SlackChannelListSlice.slice'

// dispatchインポート
import { AppDispatch } from '../../store/store.config'

// type
import { SlackChannelListTableType } from '../../components/organisms/Slack/channel/SlackChannelListTable/SlackChannelListTable.type'

//
export const setSlackChannelListTable = (
  channelList: SlackChannelListTableType[],
  dispatch: AppDispatch
): void => {
  // データセット
  dispatch(setStateSlackChannelListTable(channelList))
}
