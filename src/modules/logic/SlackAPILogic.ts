import axios from 'axios'

// reducerインポート
import {setState as setStateSlackChannelListTable} from '../slice/SlackChannelListSlice.slice'
import {setState as setStateSlackChannelCommentList} from '../slice/SlackUserCommentListSlice.slice'

// dispatchインポート
import { AppDispatch } from '../../store/store.config'

// type
import {SlackChannelListTableType} from '../../components/organisms/SlackChannelListTable/SlackChannelListTable.type'
import { OptionListType } from '../../components/atoms/SelectBox/OptionList.type';
import { UserCommentListType } from '../../components/molecules/SlackCommentSummaryTable/UserCommentList.type';

/**
 * チャンネル一覧取得
 * SlackAPI を呼び出すazure funcにアクセスし、結果をstoreに保存する
 * @param dispatch データセット
 */
export const getSlackChannelListAPIData = async(
    dispatch: AppDispatch,
  ) => {
  console.log('[getSlackChannelListAPIData] start')

  // データ取得
  let channelList:SlackChannelListTableType[] = [];
    console.log('[getDispathData] start')
    const response = await axios.get('https://dxservice-javafuncsample.azurewebsites.net/api/slackchannels?');
    console.log('[getDispathData]  set channelList')
    channelList = response.data.result;
//    setData(channelList)

  console.log('[getDispathData]  const newList')
  const newSelectList: OptionListType[] = []

  channelList.forEach((data) => {
    if(!data.isArchived) {
      const wrkData:OptionListType = {
        id: data.id,
        name: data.name
      }
      newSelectList.push(wrkData)
    }

  })
  console.log('[getDispathData]  getData')

  // データセット
  dispatch(setStateSlackChannelListTable(channelList))

  console.log('[getSlackChannelListAPIData] end ')
  // return channelList;
}

/**
 * チャンネルコメント数取得
 * SlackAPI を呼び出すazure funcにアクセスし、結果をstoreに保存する
 * 
 * @param channelId 
 * @param dispatch 
 */

export const getSlackChannelCommentAPIData = async (
  channelId: String, 
  dispatch: AppDispatch,
) => {
  const response = await axios.get('https://dxservice-javafuncsample.azurewebsites.net/api/slackcomments?name=' + channelId);
  const userCommentList:UserCommentListType[] = response.data.result;

  const newGrapthData: number[] = []
  const newGrapthLabel: string[] = []


  userCommentList.forEach((userData) => {
    newGrapthLabel.push(userData.user)
    newGrapthData.push(userData.value)
  })

  // データセット
  dispatch(setStateSlackChannelCommentList(userCommentList))

/*
  setData(userCommentList)
  setGrapthLabel(newGrapthLabel)
  setGrapthData(newGrapthData)
*/

}
