import React from 'react';
import styled from 'styled-components';
import { SECONDARY } from '../../../constants/colors';
import { formatAgo } from '../../../lib/time';

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
`;

const Comment = () => (
  <StyleWrapper>
    <h6 className="author">Si-Yan Teo</h6>
    <p className="text">
      I'm thinking it can look more like convo style (like messenger/whatsapp)
      rather than comments like fb
    </p>
    <p className="time">{formatAgo(new Date())}</p>
  </StyleWrapper>
);

export default Comment;
