import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { user as userType } from 'constants/propTypes';
import tag from 'assets/tag.svg';

const StyleWrapper = styled.div`
  padding-left: 50px;
  position: fixed;

  .channel-header {
    display: flex;
    align-items: center;
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
  }
  .channel-body {
    font-size: 0.9rem;
    margin-top: 20px;
  }
  .margin-bottom {
    margin-bottom: 20px;
  }
  .img-fluid {
    height: 15px;
  }
`;

const ChannelInfo = props => (
  <StyleWrapper>
    <div className="channel-header">
      <img className="avatar" src={props.user.photo} />
      <div className="info">
        <p className="user-to-channel">{props.title}</p>
        <Link className="plain" to={`/profile/${props.user_id}`}>
          <p>by {props.user.name}</p>
        </Link>
        <p className="time-container">{props.num_subscribers} subscribers</p>
      </div>
    </div>
    <div className="channel-body">
      <button
        className={`btn ${props.subscribed
          ? 'btn-faded'
          : 'btn-primary'} margin-bottom`}
        onClick={props.btnClickFn.bind(null, {
          channel_id: props.channel_id,
        })}
      >
        {props.subscribed ? 'unsubscribe' : 'subscribe'}
      </button>
      <p>{props.description}</p>
      {props.tags.length > 0 && (
        <p>
          <img className="img-fluid" src={tag} />{' '}
          {props.tags.map(t => t.label).join(', ')}
        </p>
      )}
    </div>
  </StyleWrapper>
);

ChannelInfo.propTypes = {
  channel_id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  num_subscribers: PropTypes.number.isRequired,
  subscribed: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  user: userType.isRequired,
  user_id: PropTypes.number.isRequired,
  btnClickFn: PropTypes.func.isRequired,
};

export default ChannelInfo;
