import React from 'react';
import { ModalBody, Input } from 'reactstrap';
import PropTypes from 'prop-types';

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
  };

  changeTab = tab => {
    this.setState({ tab });
  };

  render() {
    return (
      <StyledModal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <img
          className="img-fluid avatar"
          src="https://picsum.photos/400/400"
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
              <ArticleForm toggle={this.props.toggle} />
            )}
            {this.state.tab === 'channel' && (
              <ChannelForm toggle={this.props.toggle} />
            )}
          </div>
        </div>
      </StyledModal>
    );
  }
}

export default PostModal;
