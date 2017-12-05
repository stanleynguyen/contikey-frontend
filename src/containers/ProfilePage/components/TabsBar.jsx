import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SECONDARY } from '../../../constants/colors';

const StyleWrapper = styled.div`
  .tabs-bar.with-log:before {
    content: 'Activity Log';
    margin-right: auto;
    visibility: hidden;
  }
`;

const TabsBar = props => (
  <StyleWrapper>
    <div className={`tabs-bar ? ${props.showLog ? 'with-log' : ''}`}>
      <Link
        className={`tab-btn ${props.tab === 'channels' ? 'active' : ''}`}
        to={`/profile/${props.user_id ? `${props.user_id}/` : ''}?tab=channels`}
      >
        Channels <span className="count">{props.channelCount}</span>
      </Link>
      <Link
        className={`tab-btn ${props.tab === 'articles' ? 'active' : ''}`}
        to={`/profile/${props.user_id ? `${props.user_id}/` : ''}?tab=articles`}
      >
        Articles <span className="count">{props.articleCount}</span>
      </Link>
      <Link
        className={`tab-btn ${props.tab === 'friends' ? 'active' : ''}`}
        to={`/profile/${props.user_id ? `${props.user_id}/` : ''}?tab=friends`}
      >
        Friends <span className="count">{props.friendCount}</span>
      </Link>
      <Link
        className={`tab-btn ${props.tab === 'subscribed' ? 'active' : ''}`}
        to={`/profile/${props.user_id
          ? `${props.user_id}/`
          : ''}?tab=subscribed`}
      >
        Subscribed <span className="count">{props.followingCount}</span>
      </Link>
      {props.showLog && (
        <Link
          className={`tab-btn ml-auto ${props.tab === 'log' ? 'active' : ''}`}
          to="/profile?tab=log"
        >
          Activity Log
        </Link>
      )}
    </div>
  </StyleWrapper>
);
TabsBar.propTypes = {
  tab: PropTypes.string,
  showLog: PropTypes.bool,
  channelCount: PropTypes.number.isRequired,
  articleCount: PropTypes.number.isRequired,
  friendCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
  user_id: PropTypes.string,
};
TabsBar.defaultProps = {
  tab: 'channels',
  showLog: false,
};

export default TabsBar;
