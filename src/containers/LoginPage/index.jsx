import React from 'react';
import { Modal } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { reload } from 'lib/fbSDK';
import logo from 'assets/logo.svg';
import StyleWrapper, { StyledModalBody } from './components/StyleWrapper';
import { SUCCESS } from 'constants/misc';
import Tag from 'components/Tag';
import { auth as authType, tags as tagsType } from 'constants/propTypes';
import { authFollowTags } from 'actions';
import { history } from 'store';

class LoginPage extends React.Component {
  state = {
    chosenTagIds: [],
  };
  static propTypes = {
    insideModal: PropTypes.bool,
    auth: authType.isRequired,
    tags: tagsType.isRequired,
  };
  static defaultProps = {
    insideModal: false,
  };

  componentDidMount() {
    reload();
  }

  addTag = tag_id => {
    this.setState({ chosenTagIds: [...this.state.chosenTagIds, tag_id] });
  };
  removeTag = tag_id => {
    const new_tags = this.state.chosenTagIds.filter(i => i !== tag_id);
    this.setState({ chosenTagIds: new_tags });
  };
  doneFollowing = () => {
    this.props.authFollowTags({ tag_ids: this.state.chosenTagIds });
    history.length > 2 ? history.goBack() : history.push('/');
  };

  render() {
    return (
      <StyleWrapper insideModal={this.props.insideModal}>
        <div className="header">
          <img className="logo img-fluid" alt="Logo" src={logo} />
          <div className="tagline">
            <h1 className="title">contikey</h1>
            <p className="subtitle">read. share. discover.</p>
          </div>
        </div>
        {this.props.auth.status === SUCCESS &&
          this.props.auth.user.new_user && (
            <div className="tags-section">
              <div className="tags-container">
                {this.props.tags.value.map(v => (
                  <Tag
                    key={v.tag_id}
                    {...v}
                    selected={this.state.chosenTagIds.some(
                      id => id === v.tag_id,
                    )}
                    addTag={this.addTag}
                    removeTag={this.removeTag}
                  />
                ))}
              </div>
              <button className="btn-invisible" onClick={this.doneFollowing}>
                I'm Good To Go
              </button>
            </div>
          )}
        {!this.props.auth.user.new_user && (
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
        )}
      </StyleWrapper>
    );
  }
}
LoginPage = connect(({ auth, tags }) => ({ auth, tags }), { authFollowTags })(
  LoginPage,
);

export const ModalLoginPage = props => (
  <Modal isOpen={true} toggle={props.history.goBack}>
    <StyledModalBody>
      <LoginPage {...props} insideModal />
    </StyledModalBody>
  </Modal>
);

export default LoginPage;
