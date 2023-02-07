import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

export const NavigateSlackLabo: React.FC = () => {
  return (
    <>
      <NavDropdown title="SlackLabo" id="nav-dropdown">
        <NavDropdown.Item eventKey={2.1} as={Link} to="/SlackChannelListTable">
          チャンネル一覧
        </NavDropdown.Item>
        <NavDropdown.Item
          eventKey={2.2}
          as={Link}
          to="/slackchannelcommentMonitor"
        >
          チャンネルコメント数集計
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )
}
