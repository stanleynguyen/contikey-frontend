import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledForm from './StyledForm';
import { SECONDARY } from 'constants/colors';

const StyleWrapper = styled(StyledForm)`
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
`;
class TagComponent extends React.Component {
  state = {
    isSelected: false,
  };
  static propTypes = {
    tag: PropTypes.string,
    key: PropTypes.number,
    addTag: PropTypes.func,
    removeTag: PropTypes.func,
  };

  toggleTag = e => {
    this.setState((isSelected = !this.state.isSelected));
    if (this.state.isSelected) {
      this.props.addTag(this.props.key);
    } else {
      this.props.removeTag(this.props.key);
    }
  };

  render() {
    return (
      <div
        className={`tag ${this.state.isSelected ? 'selected' : ''}`}
        onClick={this.handleTag}
      >
        {this.props.tag}
      </div>
    );
  }
}
export default TagComponent;
