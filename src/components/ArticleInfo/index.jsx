import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleWrapper = styled.div`
  display: flex;
  .avatar {
    margin-right: 20px;
    border-radius: 50%;
    height: 70px;
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

const ArticleInfo = props => {
  if (props.showUser) {
    return (
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
  } else {
    return (
      <StyleWrapper>
        <div className="info">
          <p className="time-container">today &middot; 5 min read</p>
        </div>
      </StyleWrapper>
    );
  }
};

ArticleInfo.propTypes = {
  showUser: PropTypes.bool,
};
ArticleInfo.defaultProps = {
  showUser: true,
};

export default ArticleInfo;
