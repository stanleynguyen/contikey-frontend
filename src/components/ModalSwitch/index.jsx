import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class ModalSwitch extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf([PropTypes.node]),
    ]).isRequired,
    modalRoutes: PropTypes.arrayOf(PropTypes.node).isRequired,
    history: PropTypes.object.isRequired,
  };

  prevLocation = this.props.history.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props.history;
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.prevLocation = location;
    }
  }

  render() {
    const { location } = this.props.history;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.prevLocation !== location
    );
    return (
      <div>
        <Switch location={isModal ? this.prevLocation : location}>
          {this.props.children}
        </Switch>
        {isModal &&
          this.props.modalRoutes.map((r, i) =>
            React.cloneElement(r, { key: i }),
          )}
      </div>
    );
  }
}

export default ModalSwitch;
