import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopPage from '../../TopPage/TopPage'
import About from '../../About/About'
import { Kondo } from '../../../organisms/Kondo/Kondo'
import { SlackChannelCommentMonitor } from '../../../organisms/SlackChannelCommentMonitor/SlackChannelCommentMonitor'
import SlackChannelListTable from '../../../organisms/SlackChannelListTable/SlackChannelListTable'

export const RouteList: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/users/kondo" element={<Kondo />} />
      <Route
        path="/SlackChannelListTable"
        element={<SlackChannelListTable />}
      />
      <Route
        path="/slackchannelcommentMonitor"
        element={<SlackChannelCommentMonitor />}
      />
    </Routes>
  )
}
