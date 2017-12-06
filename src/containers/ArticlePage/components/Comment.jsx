import React from 'react';
import styled from 'styled-components';
import { SECONDARY } from '../../../constants/colors';
import { formatAgo } from '../../../lib/time';
import { comment as commentType } from 'constants/propTypes';

const StyleWrapper = styled.div`
  background-color: ${SECONDARY};
  border-radius: 5px;
  padding: 15px;
  margin: auto auto 20px auto;
  font-size: 0.8rem;
  &:last-child {
    margin-bottom: 50px;
  }
  .time {
    text-align: right;
    margin-bottom: 0;
  }
  .author,
  .avatar {
    display: inline-block;
    margin-bottom: 10px;
  }
  .avatar {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const Comment = props => (
  <StyleWrapper>
    <img className="img-fluid avatar" src={props.photo} />
    <h6 className="author">{props.name}</h6>
    <p className="text">{props.comment_text}</p>
    <p className="time">{formatAgo(props.created_at)}</p>
  </StyleWrapper>
);

Comment.propTypes = commentType.isRequired;

export default Comment;
