import React from 'react';
import PropTypes from 'prop-types';

import StyleWrapper from './components/StyleWrapper';
import Notification from './components/Notification';

const NotificationPopup = props => (
  <StyleWrapper innerRef={props.innerRef}>
    <div className="header">
      Notification&nbsp;
      <span className="badge">4</span>
    </div>
    <div className="body">
      {[...Array(10).keys()].map(i => <Notification key={i} new={i < 6} />)}
    </div>
  </StyleWrapper>
);
NotificationPopup.propTypes = {
  innerRef: PropTypes.func,
};
NotificationPopup.defaultProps = {
  innerRef: () => {},
};

export default NotificationPopup;
