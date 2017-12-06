import React from 'react';
import { Input, Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { postChannel } from 'lib/channelService';
import StyledForm from './StyledForm';
import TagComponent from 'components/Tag';
import { tags as tagsType } from 'constants/propTypes';

const StyleWrapper = styled(StyledForm)`
  .input-title {
    font-size: 1.5rem;
  }
  .tags-container {
    display: flex;
    margin-bottom: 10px;
  }
  label {
    margin-left: 10px;
    font: small-caption;
  }
`;

class ChannelForm extends React.Component {
  state = {
    chosenTagIds: [],
    successOpen: false,
    failOpen: false,
  };

  static propTypes = {
    toggle: PropTypes.func.isRequired,
    tags: tagsType.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const params = {
      title: this.title.value,
      description: this.description.value,
      tags: this.state.chosenTagIds.join(','),
    };
    postChannel(params).then(
      onFulfill => {
        this.setState({ successOpen: !this.state.successOpen });
      },
      onReject => {
        {
          this.setState({ failOpen: !this.state.failOpen });
        }
      },
    );
  };

  addTag = tag_id => {
    this.setState({ chosenTagIds: [...this.state.chosenTagIds, tag_id] });
  };

  removeTag = tag_id => {
    const new_tags = this.state.chosenTagIds.filter(i => i !== tag_id);
    this.setState({ chosenTagIds: new_tags });
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
        <label> Choose at least 1 tag for your channel. </label>
        <div className="tags-container">
          {this.props.tags.value.map(v => (
            <TagComponent
              key={v.tag_id}
              {...v}
              selected={this.state.chosenTagIds.some(id => id === v.tag_id)}
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
          isOpen={this.state.successOpen || this.state.failOpen}
          toggle={this.props.toggle}
          color={this.state.successOpen ? 'success' : 'danger'}
        >
          {this.state.successOpen
            ? 'You posted a channel successfully!'
            : 'Something went wrong'}
        </Alert>
      </StyleWrapper>
    );
  }
}

export default connect(({ tags }) => ({ tags }), {})(ChannelForm);
