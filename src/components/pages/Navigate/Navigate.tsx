import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigate() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href="#home">DXサービスユニット TechLabo</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">toppage</Link>
            <Link to="/about">about</Link>
            <Link to="/SlackChannelListTable">チャンネル一覧</Link>
            <Link to="/slackchannelcommentMonitor">チャンネルコメント数集計</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigate;
