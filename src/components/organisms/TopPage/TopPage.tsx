import React, { useEffect, useState } from 'react'
import logo from './logo.svg';

import { getSlackChannelListAPIData } from '../../../modules/logic/SlackAPILogic';
import { useAppDispatch, useAppSelector } from '../../../store/store.hooks';

// react-create-appで生成した画面
const TopPage: React.FC = () => {

  const [message, setMessage] = useState<string>('チャンネル一覧取得中…');

  const dispatch = useAppDispatch();
  const data = useAppSelector((s) => s.SlackChannelList);
  if (data === null || data?.length === 0) {
    getSlackChannelListAPIData(dispatch);
  } else {
    if (message !== 'チャンネル一覧取得完了') {
      setMessage('チャンネル一覧取得完了');
    }
  }

  useEffect(() => {
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
      </header>
    </div>
  )
}

export default TopPage;