import React from 'react';
import { ModalBody, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import { user as userType, tags as tagsType } from 'constants/propTypes';
import StyledModal from './components/StyledModal';
import ArticleForm from './components/ArticleForm';
import ChannelForm from './components/ChannelForm';

class PostModal extends React.Component {
  state = {
    tab: 'post',
  };
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    user: userType.isRequired,
    tags: tagsType.isRequired,
  };

  changeTab = tab => {
    this.setState({ tab });
  };

  render() {
    return (
      <StyledModal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <img
          className="img-fluid avatar"
          src={this.props.user.photo}
          alt="Avatar"
        />
        <div className="box">
          <div className="tabs">
            <button
              className={`btn ${this.state.tab === 'post' ? 'active' : ''}`}
              onClick={this.changeTab.bind(this, 'post')}
            >
              Post Article
            </button>
            <button
              className={`btn ${this.state.tab === 'channel' ? 'active' : ''}`}
              onClick={this.changeTab.bind(this, 'channel')}
            >
              Create Channel
            </button>
          </div>
          <div className="box-body">
            {this.state.tab === 'post' && (
              <ArticleForm
                toggle={this.props.toggle}
                channels={this.props.user.channels}
              />
            )}
            {this.state.tab === 'channel' && (
              <ChannelForm toggle={this.props.toggle} tags={this.props.tags} />
            )}
          </div>
        </div>
      </StyledModal>
    );
  }
}
export default PostModal;
