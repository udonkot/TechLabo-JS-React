import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/pages/About/About';
import Navige from './components/pages/Navigate/Navigate';
import SlackChannelListTable from './components/molecules/SlackChannelListTable/SlackChannelListTable';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SlackChannelCommentMonitor from './components/pages/SlackChannelCommentMonitor/SlackChannelCommentMonitor';
import {SlackChannelListTableType} from './components/molecules/SlackChannelListTable/SlackChannelListTable.type'
import axios from 'axios'
import { OptionListType } from './components/atoms/SelectBox/OptionList.type';


function TopPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"

        >
          Learn React
        </a>
      </header>
    </div>
  )
}

function App() {

  const [data, setData] = React.useState<SlackChannelListTableType[]>([]);
  const [selectList, setSelectList] = React.useState<OptionListType[]>([])
  if(data.length === 0)  {

  const getChannel = async () => {
            const response = await axios.get('https://dxservice-javafuncsample.azurewebsites.net/api/slackchannels?');
            const channelList:SlackChannelListTableType[] = response.data.result;
            setData(channelList)

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
            setSelectList(newSelectList)
  }

   
  getChannel();
}

  return (
    <BrowserRouter>
    <Navige/>
    <Routes>
      <Route path='/' element={<TopPage/>}/>
      <Route path='/about'element={<About/>} />
      <Route path='/SlackChannelListTable' element={<SlackChannelListTable tableData={data}/>} />
      <Route path='/slackchannelcommentMonitor'  element={<SlackChannelCommentMonitor selectList={selectList}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
