import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';

import { reload } from 'lib/fbSDK';
import logo from 'assets/logo.svg';
import StyleWrapper from './components/StyleWrapper';

class LoginPage extends React.Component {
  static propTypes = {
    insideModal: PropTypes.bool,
  };
  static defaultProps = {
    insideModal: false,
  };

  componentDidMount() {
    reload();
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
