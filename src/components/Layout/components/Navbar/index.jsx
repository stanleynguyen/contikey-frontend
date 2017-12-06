import React from 'react';
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
  InputGroup,
  InputGroupButton,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from 'assets/logo.svg';
import home from 'assets/home-button.svg';
import compass from 'assets/compass.svg';
import user from 'assets/user.svg';
import writing from 'assets/writing.svg';
import noti from 'assets/notifications.svg';
import glass from 'assets/mag-glass.svg';

import PropTypes from 'prop-types';
import { auth as authType, tags as tagsType } from 'constants/propTypes';
import StyledNavbar from './components/StyledNavbar';
import NotificationPopup from './components/NotificationPopup';
import PostModal from './components/PostModal';
import { history } from 'store';
import { SUCCESS } from 'constants/misc';
import { authLoadNoti, authMarkNotiAsRead } from 'actions';

class DBoardNavbar extends React.Component {
  state = {
    isOpen: false,
    notiOpen: false,
    postOpen: false,
  };
  static propTypes = {
    auth: authType.isRequired,
    tags: tagsType.isRequired,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutsideNoti);
    this.startNotiInterval();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.auth.status === SUCCESS &&
      this.props.auth.status !== prevProps.auth.status
    ) {
      this.startNotiInterval();
    }
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutsideNoti);
    this.clearNotiInterval();
  }

  handleClickOutsideNoti = e => {
    if (
      this.notiBtn &&
      e.target !== this.notiBtn &&
      !this.notiBtn.contains(e.target) &&
      this.popup &&
      !this.popup.contains(e.target)
    ) {
      this.setState({ notiOpen: false });
    }
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleNoti = () => {
    if (this.props.auth.status !== SUCCESS)
      return history.push('/login', { modal: true });
    this.setState({ notiOpen: !this.state.notiOpen });
  };

  togglePost = () => {
    if (this.props.auth.status !== SUCCESS)
      return history.push('/login', { modal: true });
    this.setState({ postOpen: !this.state.postOpen });
  };

  handleSearch = e => {
    e.preventDefault();
    const query = this.searchInput.value;
    if (query) history.push(`/search?q=${query}`);
  };

  startNotiInterval = () => {
    this.clearNotiInterval();
    if (this.props.auth.status === SUCCESS) {
      this.notiInterval = setInterval(this.props.authLoadNoti, 3000);
    }
  };
  clearNotiInterval = () => {
    if (this.notiInterval) clearInterval(this.notiInterval);
  };

  render() {
    const newNoti = this.props.auth.notifications.filter(n => n.is_read === 0);
    return (
      <StyledNavbar light expand="md" fixed="top">
        <NavbarBrand tag={Link} to="/">
          <img className="logo" src={logo} alt="Logo" />
        </NavbarBrand>
        <form onSubmit={this.handleSearch}>
          <InputGroup>
            <InputGroupButton>
              <img className="navbar-icon" src={glass} />
            </InputGroupButton>
            <Input type="text" innerRef={i => (this.searchInput = i)} />
          </InputGroup>
        </form>
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
              <Button
                className="nav-link"
                color=""
                onClick={this.toggleNoti}
                innerRef={i => (this.notiBtn = i)}
              >
                {newNoti.length > 0 && (
                  <span className="badge">{newNoti.length}</span>
                )}
                <img className="navbar-icon" src={noti} />
              </Button>
              <NotificationPopup
                innerRef={i => (this.popup = i)}
                notifications={this.props.auth.notifications}
                closeFn={this.toggleNoti}
                markNoti={this.props.authMarkNotiAsRead}
                show={this.state.notiOpen}
              />
            </NavItem>
            <NavItem>
              {this.props.auth.status !== SUCCESS && (
                <NavLink
                  tag={Link}
                  to={{ pathname: '/login', state: { modal: true } }}
                >
                  <img className="navbar-icon" src={user} />
                </NavLink>
              )}
              {this.props.auth.status === SUCCESS && (
                <NavLink tag={Link} to="/profile">
                  <img
                    className="navbar-icon avatar"
                    src={this.props.auth.user.photo}
                  />
                </NavLink>
              )}
            </NavItem>
            <NavItem>
              <Button className="nav-link" color="" onClick={this.togglePost}>
                <img className="navbar-icon" src={writing} />
              </Button>
              <PostModal
                isOpen={this.state.postOpen}
                toggle={this.togglePost}
                user={this.props.auth.user}
                tags={this.props.tags}
              />
            </NavItem>
          </Nav>
        </Collapse>
      </StyledNavbar>
    );
  }
}

export default connect(({ auth, tags }) => ({ auth, tags }), {
  authLoadNoti,
  authMarkNotiAsRead,
})(DBoardNavbar);
