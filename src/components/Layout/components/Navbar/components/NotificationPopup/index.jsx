import React from 'react';
import PropTypes from 'prop-types';
import { notification as notificationType } from 'constants/propTypes';

import StyleWrapper from './components/StyleWrapper';
import Notification from './components/Notification';

const NotificationPopup = props => {
  const newNoti = props.notifications.filter(n => n.is_read === 0);
  return (
    <StyleWrapper innerRef={props.innerRef} show={props.show}>
      <div className="header">
        Notification&nbsp;
        {newNoti.length > 0 && <span className="badge">{newNoti.length}</span>}
      </div>
      <div className="body">
        {props.notifications.map(v => (
          <Notification
            key={v.notification_id}
            {...v}
            closeFn={props.closeFn}
            markNoti={props.markNoti}
          />
        ))}
      </div>
    </StyleWrapper>
  );
};
NotificationPopup.propTypes = {
  innerRef: PropTypes.func,
  notifications: PropTypes.arrayOf(notificationType).isRequired,
  closeFn: PropTypes.func,
  markNoti: PropTypes.func,
  show: PropTypes.bool.isRequired,
};
NotificationPopup.defaultProps = {
  innerRef: () => {},
  closeFn: () => {},
  markNoti: () => {},
};

export default NotificationPopup;
