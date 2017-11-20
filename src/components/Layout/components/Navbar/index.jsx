import React from 'react';
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../../../../assets/logo.svg';
import home from '../../../../assets/home-button.svg';
import compass from '../../../../assets/compass.svg';
import user from '../../../../assets/user.svg';
import writing from '../../../../assets/writing.svg';
import noti from '../../../../assets/notifications.svg';

import StyledNavbar from './components/StyledNavbar';
import NotificationPopup from './components/NotificationPopup';

class DBoardNavbar extends React.Component {
  state = {
    isOpen: false,
    notiOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleNoti = () => {
    this.setState({ notiOpen: !this.state.notiOpen });
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
              <NavLink tag={Button} onClick={this.toggleNoti}>
                <span className="badge">4</span>
                <img className="navbar-icon" src={noti} />
              </NavLink>
              {this.state.notiOpen && <NotificationPopup />}
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
