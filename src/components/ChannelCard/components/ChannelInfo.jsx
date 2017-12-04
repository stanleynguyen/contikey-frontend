import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { user as userType } from 'constants/propTypes';

const StyleWrapper = styled(Link)`
  .info {
    display: flex;
    align-items: center;
    height: 90px;
    .avatar {
      margin-right: 30px;
    }
    .details {
      h4,
      p {
        margin-bottom: 0;
      }
      .title {
        font-weight: 300;
      }
      .extra {
        color: #999;
      }
    }
  }
`;

const ChannelInfo = props => (
  <StyleWrapper className="plain" to={`/channel/${props.channel_id}`}>
    <div className="info">
      <img className="avatar img-fluid rounded-circle" src={props.user.photo} />
      <div className="details">
        <h4 className="title">{props.title}</h4>
        <p className="faded">{props.num_subscribers} subscribers</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  </StyleWrapper>
);
ChannelInfo.propTypes = {
  channel_id: PropTypes.number.isRequired,
  user: userType.isRequired,
  title: PropTypes.string.isRequired,
  num_subscribers: PropTypes.number,
  description: PropTypes.string.isRequired,
};
ChannelInfo.defaultProps = {
  num_subscribers: 0,
};

export default ChannelInfo;
