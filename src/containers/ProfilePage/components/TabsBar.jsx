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
};
TabsBar.defaultProps = {
  tab: 'channels',
  showLog: false,
};

export default TabsBar;
