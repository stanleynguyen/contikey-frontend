import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { load } from '../../lib/fbSDK';

const StyleWrapper = styled.div`
  width: 100%;
  height: ${({ insideModal }) => (insideModal ? '100%' : 'calc(100vh - 70px)')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
    <ModalHeader toggle={props.history.goBack}>Login</ModalHeader>
    <ModalBody>
      <LoginPage {...props} insideModal />
    </ModalBody>
  </Modal>
);

export default LoginPage;
