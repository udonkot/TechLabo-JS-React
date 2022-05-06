import React from 'react';
import {Link} from 'react-router-dom';

function Navigate() {
  return (
    <div className="Navigate">
      <ul>
        <li>
          <Link to="/">toppage</Link>
        </li>
        <li>  
          <Link to="/about">about</Link>
        </li>
        <li>  
          <Link to="/SlackChannelListTable">チャンネル一覧</Link>
        </li>
        <li>  
          <Link to="/slackchannelcommentMonitor">チャンネルコメント数集計</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigate;
