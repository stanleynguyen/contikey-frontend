import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../../assets/logo.svg';
import home from '../../../assets/home-button.svg';
import compass from '../../../assets/compass.svg';
import user from '../../../assets/user.svg';
import writing from '../../../assets/writing.svg';
import { PRIMARY } from '../../../constants/colors';

const StyledNavbar = styled(Navbar)`
  background-color: ${PRIMARY};
  .logo {
    height: 50px;
    width: auto;
    filter: invert(100%);
  }
  .navbar-icon {
    height: 30px;
    width: auto;
  }
  .btn {
    background: transparent;
    border: none;
  }
`;

class DBoardNavbar extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <StyledNavbar light expand="md" fixed="top">
        <NavbarBrand tag={Link} to="/">
          <img className="logo" src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                <img className="navbar-icon" src={home} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/explore">
                <img className="navbar-icon" src={compass} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/profile">
                <img className="navbar-icon" src={user} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Button}>
                <img className="navbar-icon" src={writing} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </StyledNavbar>
    );
  }
}

export default DBoardNavbar;
