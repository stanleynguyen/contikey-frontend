import React from 'react';
import { Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledForm from './StyledForm';
import { tagList } from 'constants/tags';
import TagComponent from './TagComponent';

const StyleWrapper = styled(StyledForm)`
  .input-title {
    font-size: 1.5rem;
  }
  .tags-container {
    display: flex;
    margin-bottom: 10px;
  }
`;

class ChannelForm extends React.Component {
  state = {
    tags: [],
    successOpen: false,
  };

  static propTypes = {
    toggle: PropTypes.func.isRequired,
    channelNew: PropTypes.func.isRequired,
    user_id: PropTypes.number.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const params = {
      title: this.title.value,
      description: this.description.value,
      tags: this.state.tags,
    };
    this.props.channelNew(params);
    this.setState({ successOpen: !this.state.successOpen });
  };

  addTag = tag_id => {
    if (this.state.tags.indexOf(tag_id) != -1) {
      new_tags = this.state.tags.slice().append(tagList);
      this.setState((tags = new_tags));
    }
  };

  removeTag = tag_id => {
    if (this.state.tags.length) {
      new_tags = this.state.tags.filter(i => {
        i !== tag_id;
      });
      this.setState((tags = new_tags));
    }
  };

  render() {
    return (
      <StyleWrapper onSubmit={this.handleSubmit}>
        <Input
          type="text"
          className="input-title"
          placeholder="Title"
          innerRef={i => (this.title = i)}
        />
        <Input
          type="textarea"
          rows={4}
          placeholder="Describe your channel!"
          innerRef={i => (this.description = i)}
        />
        <div className="tags-container">
          {tagList.map(i => (
            <TagComponent
              key={tagList.indexOf(i)}
              tag={i}
              addTag={this.addTag}
              removeTag={this.removeTag}
            />
          ))}
        </div>
        <div className="buttons">
          <button
            className="btn-invi"
            type="button"
            onClick={this.props.toggle}
          >
            Cancel
          </button>
          <button className="btn-secondary" type="submit">
            Create
          </button>
        </div>
        <Alert
          className="alert"
          isOpen={this.state.successOpen}
          toggle={this.props.toggle}
        >
          You posted a channel successfully!{' '}
        </Alert>
      </StyleWrapper>
    );
  }
}

export default ChannelForm;
