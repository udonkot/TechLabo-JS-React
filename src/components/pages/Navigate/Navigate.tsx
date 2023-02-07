import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavigateMain } from './NavigateMain/NavigateMain'
import { NavigateSlackLabo } from './NavigateSlackLabo/NavigateSlackLabo'
import { NavigateUsersLabo } from './NavigateUsersLabo/NavigateUsersLabo'

export const Navigate: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">DXサービスユニット TechLabo4React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavigateMain />
          <NavigateSlackLabo />
          <NavigateUsersLabo />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
