import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

export const NavigateUsersLabo: React.FC = () => {
  return (
    <>
      <NavDropdown title="UsersLabo" id="nav-dropdown">
        <NavDropdown.Item eventKey={3.1} as={Link} to="/users/kondo">
          Kondo`&apos;sLabo
        </NavDropdown.Item>
        <NavDropdown.Item eventKey={3.99} as={Link} to="/users/template">
          Template`&apos;sLabo
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )
}
