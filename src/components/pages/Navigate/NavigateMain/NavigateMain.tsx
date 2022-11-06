import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavigateMain: React.FC = () => {
  return (
    <>
      <NavDropdown title="Main" id="nav-dropdown">
        <NavDropdown.Item as={Link} eventKey={1.1} to="/about">
          about
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )
}
