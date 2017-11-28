import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { load } from '../../lib/fbSDK';
import kidPic from '../../assets/kid.jpeg';
import logo from '../../assets/logo.svg';

const StyleWrapper = styled.div`
  width: 100%;
  height: ${({ insideModal }) => (insideModal ? '100%' : '100vh')};
  background: ${({ insideModal }) =>
    insideModal ? '#fff' : `url(${kidPic}) no-repeat center center`};
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .header {
    padding: 20px;
    display: flex;
    align-items: center;

    .logo {
      width: 100px;
      height: 100px;
      margin-right: 20px;
    }
    .tagline {
      .title,
      .subtitle {
        margin-bottom: 0;
      }
    }
  }
`;

class LoginPage extends React.Component {
  static propTypes = {
    insideModal: PropTypes.bool,
  };
  static defaultProps = {
    insideModal: false,
  };

  componentDidMount() {
    load();
  }

  render() {
    return (
      <StyleWrapper insideModal={this.props.insideModal}>
        <div className="header">
          <img className="logo img-fluid" alt="Logo" src={logo} />
          <div className="tagline">
            <h1 className="title">dboard</h1>
            <p className="subtitle">read. share. discover.</p>
          </div>
        </div>
        <div
          className="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-button-type="continue_with"
          data-show-faces="false"
          data-auto-logout-link="true"
          data-use-continue-as="true"
          data-scope="public_profile, user_friends, email"
        />
      </StyleWrapper>
    );
  }
}

export const ModalLoginPage = props => (
  <Modal isOpen={true} toggle={props.history.goBack}>
    <ModalBody>
      <LoginPage {...props} insideModal />
    </ModalBody>
  </Modal>
);

export default LoginPage;
