import React from 'react';
import { Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import StyledForm from './StyledForm';
import { postArticle } from 'lib/articleService';
import { getChannels } from 'lib/userService';

class ArticleForm extends React.Component {
  state = {
    channel_id: '',
    successOpen: false,
    failOpen: false,
    isPosting: false,
    channels: [],
  };

  static propTypes = {
    toggle: PropTypes.func.isRequired,
  };

  componentDidMount() {
    getChannels()
      .then(success => this.setState({ channels: success.data }))
      .catch(failure => this.setState({ failOpen: true }));
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

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
    this.setState({ isPosting: true });
    postArticle(params).then(
      success => {
        this.setState({
          successOpen: true,
          isPosting: false,
        });
        this.timeout = setTimeout(
          () => this.setState({ successOpen: false }),
          5000,
        );
        this.formEl.reset();
      },
      failure => {
        this.setState({ failOpen: true, isPosting: false });
        this.timeout = setTimeout(
          () => this.setState({ failOpen: false }),
          5000,
        );
      },
    );
  };

  render() {
    return (
      <StyledForm
        innerRef={e => (this.formEl = e)}
        onSubmit={this.handleSubmit}
      >
        <label>Post to:&nbsp;</label>
        <select className="channels" value={this.state.channel_id}>
          <option value="" disabled>
            Select a channel to post to
          </option>
          {this.state.channels.map(channel => (
            <option value={channel.channel_id} onClick={this.changeChannel}>
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
          <button
            className="btn-secondary"
            type="submit"
            disabled={this.state.isPosting}
          >
            {this.state.isPosting ? 'Posting' : 'Post'}
          </button>
        </div>
        <Alert
          className="alert"
          isOpen={this.state.successOpen}
          toggle={this.props.toggle}
          color="success"
        >
          You posted an article successfully!
        </Alert>
        <Alert
          className="alert"
          isOpen={this.state.failOpen}
          toggle={this.props.toggle}
          color="danger"
        >
          Something went wrong.
        </Alert>
      </StyledForm>
    );
  }
}

export default ArticleForm;
