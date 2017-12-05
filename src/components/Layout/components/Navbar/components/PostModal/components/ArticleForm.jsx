import React from 'react';
import { Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import StyledForm from './StyledForm';
import { postArticle } from 'lib/articleService';

class ArticleForm extends React.Component {
  state = {
    channel_id: 1,
    successOpen: false,
    failOpen: false,
  };

  static propTypes = {
    channels: PropTypes.array,
    toggle: PropTypes.func.isRequired,
  };

  changeChannel = e => {
    e.preventDefault();
    this.setState({ channel_id: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const params = {
      url: this.url.value,
      caption: this.caption.value,
      channel_id: this.state.channel_id,
    };
    postArticle(params).then(
      success => {
        this.setState({ successOpen: !this.state.successOpen });
      },
      failure => {
        this.setState({ failOpen: !this.state.failOpen });
      },
    );
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label>Post to:&nbsp;</label>
        <select className="channels">
          {this.props.channels.map(channel => (
            <option value={channel.title} onClick={this.changeChannel}>
              {channel.title}
            </option>
          ))}
        </select>
        <Input
          type="text"
          placeholder="Article URL"
          innerRef={i => (this.url = i)}
        />
        <Input
          type="textarea"
          rows={4}
          placeholder="Caption this!"
          innerRef={i => (this.caption = i)}
        />
        <div className="buttons">
          <button
            className="btn-invi"
            type="button"
            onClick={this.props.toggle}
          >
            Cancel
          </button>
          <button className="btn-secondary" type="submit">
            Post
          </button>
        </div>
        <Alert
          className="alert"
          isOpen={this.state.successOpen || this.state.failOpen}
          toggle={this.props.toggle}
          color={this.state.successOpen ? 'success' : 'danger'}
        >
          {this.state.successOpen
            ? 'You posted an article successfully!'
            : 'Please use a valid URL'}
        </Alert>
      </StyledForm>
    );
  }
}

export default ArticleForm;
