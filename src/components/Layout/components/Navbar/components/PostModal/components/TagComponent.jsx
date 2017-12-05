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
    font: 0.8em 'Fira Sans', sans-serif;
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
    index: PropTypes.number,
    addTag: PropTypes.func,
    removeTag: PropTypes.func,
  };

  toggleTag = e => {
    this.setState({ isSelected: !this.state.isSelected }, () => {
      if (this.state.isSelected) {
        console.log('tag selected! ', this.props.index);
        this.props.addTag(this.props.index);
      } else {
        console.log('tag removed! ', this.props.index);
        this.props.removeTag(this.props.index);
      }
    });
  };

  render() {
    return (
      <StyleWrapper>
        <div
          className={`tag ${this.state.isSelected ? 'selected' : ''}`}
          onClick={this.toggleTag}
        >
          {this.props.tag}
        </div>
      </StyleWrapper>
    );
  }
}
export default TagComponent;
