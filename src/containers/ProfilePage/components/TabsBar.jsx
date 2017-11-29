import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SECONDARY } from '../../../constants/colors';

const StyleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 2px solid #eee;
  border-bottom: 2px solid #eee;
  &:before {
    content: 'Activity Log';
    margin-right: auto;
    visibility: hidden;
  }
  .tab-btn,
  &:before {
    padding: 10px;
  }
  .tab-btn {
    color: #999;
    text-transform: uppercase;
    font-weight: 600;
    &:hover,
    &:focus {
      color: #999;
      text-decoration: none;
    }
    &.active {
      color: ${SECONDARY};
      border-bottom: 4px solid ${SECONDARY};
      padding-bottom: 6px;
    }
    .count {
      font-weight: normal;
    }
  }
`;

const TabsBar = props => (
  <StyleWrapper>
    <Link
      className={`tab-btn ${props.tab === 'channels' ? 'active' : ''}`}
      to="/profile?tab=channels"
    >
      Channels <span className="count">3</span>
    </Link>
    <Link
      className={`tab-btn ${props.tab === 'articles' ? 'active' : ''}`}
      to="/profile?tab=articles"
    >
      Articles <span className="count">23</span>
    </Link>
    <Link
      className={`tab-btn ${props.tab === 'friends' ? 'active' : ''}`}
      to="/profile?tab=friends"
    >
      Friends <span className="count">1000</span>
    </Link>
    <Link
      className={`tab-btn ${props.tab === 'subscribed' ? 'active' : ''}`}
      to="/profile?tab=subscribed"
    >
      Subscribed <span className="count">6</span>
    </Link>
    <Link
      className={`tab-btn ml-auto ${props.tab === 'activity' ? 'active' : ''}`}
      to="/profile?tab=activity"
    >
      Activity Log
    </Link>
  </StyleWrapper>
);
TabsBar.propTypes = {
  tab: PropTypes.string,
};
TabsBar.defaultProps = {
  tab: 'channels',
};

export default TabsBar;
