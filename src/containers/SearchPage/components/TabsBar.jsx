import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SECONDARY } from '../../../constants/colors';

const TabsBar = props => (
  <div className="tabs-bar">
    <Link
      className={`tab-btn ${props.tab === 'channels' ? 'active' : ''}`}
      to={props.url + 'tab=channels'}
    >
      Channels
    </Link>
    <Link
      className={`tab-btn ${props.tab === 'articles' ? 'active' : ''}`}
      to={props.url + 'tab=articles'}
    >
      Articles
    </Link>
    <Link
      className={`tab-btn ${props.tab === 'users' ? 'active' : ''}`}
      to={props.url + 'tab=users'}
    >
      Users
    </Link>
  </div>
);
TabsBar.propTypes = {
  tab: PropTypes.string,
  url: PropTypes.string,
};
TabsBar.defaultProps = {
  tab: 'channels',
  url: '?',
};

export default TabsBar;
