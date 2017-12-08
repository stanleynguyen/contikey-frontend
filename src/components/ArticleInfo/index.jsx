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
      {props.user && <img className="avatar" src={props.user.photo} />}
      <div className="info">
        {props.channel && (
          <p className="user-to-channel">
            {props.user && (
              <Link className="plain" to={`/profile/${props.user.user_id}`}>
                {props.user.name + ' '}
              </Link>
            )}
            {props.showUser &&
              props.user && <span className="arrow">&gt;</span>}
            {props.channel && (
              <Link
                className="plain"
                to={`/channel/${props.channel.channel_id}`}
              >
                {' ' + props.channel.title}
              </Link>
            )}
          </p>
        )}
        <p className="time-container">
          {formatAgo(props.created_at)} &middot;{' '}
          {props.num_words > 0 && getMinutesRead(props.num_words)}
        </p>
      </div>
    </StyleWrapper>
  );
};

ArticleInfo.propTypes = {
  showUser: PropTypes.bool,
  created_at: PropTypes.string.isRequired,
  user: userType,
  num_words: PropTypes.number,
  channel: PropTypes.shape({
    channel_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
ArticleInfo.defaultProps = {
  showUser: true,
};

export default ArticleInfo;
