import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { formatAgo, getMinutesRead } from 'lib/time';
import { user as userType } from 'constants/propTypes';

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
      <img className="avatar" src={props.user.photo} />
      <div className="info">
        {props.showUser && (
          <p className="user-to-channel">
            <Link className="plain" to={`/user/${props.user.user_id}`}>
              {props.user.name + ' '}
            </Link>
            <span className="arrow">&gt;</span>
            <Link className="plain" to={`/channel/${props.channel.channel_id}`}>
              {' ' + props.channel.title}
            </Link>
          </p>
        )}
        <p className="time-container">
          {formatAgo(new Date(props.created_at))} &middot;{' '}
          {props.num_words && getMinutesRead(props.num_words)}
        </p>
      </div>
    </StyleWrapper>
  );
};

ArticleInfo.propTypes = {
  showUser: PropTypes.bool,
  created_at: PropTypes.string,
  user: userType.isRequired,
  num_words: PropTypes.number,
};
ArticleInfo.defaultProps = {
  showUser: true,
  created_at: JSON.stringify(new Date()),
  channel: {
    channel_id: 1,
    title: 'Random',
  },
};

export default ArticleInfo;
