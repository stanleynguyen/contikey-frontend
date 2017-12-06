import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SECONDARY } from 'constants/colors';

const StyleWrapper = styled.div`
  .tag {
    margin-right: 5px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 9999px;
    padding: 5px 10px;
    font: 0.8em 'Fira Sans', sans-serif;
    line-height: 0.8rem;
    cursor: pointer;
    background: #fff;
    &.selected {
      border-color: ${SECONDARY};
      background: ${SECONDARY};
    }
  }
`;
class TagComponent extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    tag_id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    addTag: PropTypes.func,
    removeTag: PropTypes.func,
  };
  static defaultProps = {
    addTag: () => {},
    removeTag: () => {},
  };

  toggleTag = () => {
    if (this.props.selected) {
      this.props.removeTag(this.props.tag_id);
    } else {
      this.props.addTag(this.props.tag_id);
    }
  };

  render() {
    return (
      <StyleWrapper>
        <div
          className={`tag ${this.props.selected ? 'selected' : ''}`}
          onClick={this.toggleTag}
        >
          {this.props.label}
        </div>
      </StyleWrapper>
    );
  }
}
export default TagComponent;
