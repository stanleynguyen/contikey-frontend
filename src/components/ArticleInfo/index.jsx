import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { formatAgo } from 'lib/time';

import { formatAgo } from 'lib/time';

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
  return (
    <StyleWrapper>
      <img className="avatar" src="https://unsplash.it/300/300" />
      <div className="info">
        {props.showUser && (
          <p className="user-to-channel">
            {props.user.name} <span className="arrow">&gt;</span>{' '}
            {props.channel.title}
          </p>
          <p className="time-container">
            {formatAgo(new Date(props.created_at))} &middot; 5 min read
          </p>
        )}
        <p className="time-container">
          {formatAgo(new Date(props.created_at))} &middot; 5 min read
        </p>
      </div>
    </StyleWrapper>
  );
};

ArticleInfo.propTypes = {
  showUser: PropTypes.bool,
  created_at: PropTypes.string,
};
ArticleInfo.defaultProps = {
  showUser: true,
  created_at: JSON.stringify(new Date()),
  user: {
    name: 'Siyan',
    photo: 'https://unsplash.it/300/300',
    user_id: 1,
  },
  channel: {
    channel_id: 1,
    title: 'Random',
  },
};

export default ArticleInfo;
