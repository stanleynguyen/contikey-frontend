import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledForm from './StyledForm';
import { SECONDARY } from 'constants/colors';

const StyleWrapper = styled(StyledForm)`
  .input-title {
    font-size: 1.5rem;
  }
  .tags-container {
    display: flex;
    margin-bottom: 10px;
    .tag {
      margin-right: 5px;
      border: 1px solid #ccc;
      border-radius: 9999px;
      padding: 5px 10px;
      line-height: 0.8rem;
      &.selected {
        border-color: ${SECONDARY};
        background: ${SECONDARY};
      }
    }
  }
`;

const ChannelForm = props => (
  <StyleWrapper onSubmit={e => e.preventDefault()}>
    <Input type="text" className="input-title" placeholder="Title" />
    <Input type="textarea" rows={4} placeholder="What is this channel about?" />
    <div className="tags-container">
      {[...Array(5).keys()].map(i => (
        <div className={`tag ${i % 3 === 0 ? 'selected' : ''}`} key={i}>
          tag {i}
        </div>
      ))}
    </div>
    <div className="buttons">
      <button className="btn-invi" type="button" onClick={props.toggle}>
        Cancel
      </button>
      <button className="btn-secondary" type="submit">
        Create
      </button>
    </div>
  </StyleWrapper>
);
ChannelForm.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default ChannelForm;
