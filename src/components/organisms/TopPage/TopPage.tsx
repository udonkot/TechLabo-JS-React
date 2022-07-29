import React, { useEffect } from 'react'
import logo from './logo.svg';

import { getSlackChannelListAPIData } from '../../../modules/logic/SlackAPILogic';
import { useAppDispatch, useAppSelector } from '../../../store/store.hooks';
import {SlackChannelListTableType} from '../SlackChannelListTable/SlackChannelListTable.type';
import {setState as setStateSlackChannelTable} from '../../../modules/slice/SlackChannelSlice.slice';

// react-create-appで生成した画面
const TopPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const data = useAppSelector((s) => s.SlackChannelList);
  if (data === null || data?.length === 0) {
    console.log('[TopPage] getSlackChannelListAPIData')
    getSlackChannelListAPIData(dispatch);

  }


  const tableData = useAppSelector((s) => s.SlackChannelList);
  console.log('redux length:' + tableData.length);

  useEffect(() => {
  }, [])

  const dummydata:SlackChannelListTableType = {
    id: 'test',
    isArchived:true,
    name:'テスト',
    numOfMembers: 10
  }

  console.log("dispatch dummydata name=" + dummydata.name);
  dispatch(setStateSlackChannelTable(dummydata));



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
      </header>
    </div>
  )
}

export default TopPage;