import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  display: flex;
  height: 70px;
  .avatar {
    margin-right: 20px;
    border-radius: 50%;
    height: 100%;
    width: auto;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin-bottom: 0;
    }
    .user-to-channel {
      font-size: 1.5rem;
      font-weight: 300;
    }
    .time-container {
      color: #999;
    }
  }
`;

const ArticleInfo = () => (
  <StyleWrapper>
    <img className="avatar" src="https://unsplash.it/300/300" />
    <div className="info">
      <p className="user-to-channel">
        Siyan <span className="arrow">&gt;</span> Random
      </p>
      <p className="time-container">today &middot; 5 min read</p>
    </div>
  </StyleWrapper>
);

export default ArticleInfo;
