// liblary
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './store/store.config'

// style
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// type
import {SlackChannelListTableType} from './components/organisms/SlackChannelListTable/SlackChannelListTable.type'

// components
// pages
import TopPage from './components/pages/TopPage/TopPage';
import About from './components/pages/About/About';
import Navigate from './components/pages/Navigate/Navigate';
import SlackChannelCommentMonitor from './components/organisms/SlackChannelCommentMonitor/SlackChannelCommentMonitor';
import SlackChannelListTable from './components/pages/SlackChannelListTable/SlackChannelListTable';


const App: React.FC = () => {
  console.log('[App] start')

//  const [data, setData] = React.useState<SlackChannelListTableType[]>([]);
//  const [selectList, setSelectList] = React.useState<OptionListType[]>([])

  // TODO:SlackAPIコール
  // reduxにdhispatch

  // UI
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigate/>
        <Routes>
          <Route path='/' element={<TopPage/>}/>
          <Route path='/about'element={<About/>} />
           <Route path='/SlackChannelListTable' element={<SlackChannelListTable />} />
          <Route path='/slackchannelcommentMonitor'  element={<SlackChannelCommentMonitor/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

}

export default App;
