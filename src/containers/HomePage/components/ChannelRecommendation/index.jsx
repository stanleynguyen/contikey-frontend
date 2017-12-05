import React from 'react';
import PropTypes from 'prop-types';
import { channel as channelType } from 'constants/propTypes';

import StyleWrapper from './components/StyleWrapper';

const ChannelRec = props => (
  <StyleWrapper>
    <div className="photo-container">
      <img className="photo img-fluid" src={props.user.photo} />
    </div>
    <div className="info-container">
      <div className="header">
        <div className="info">
          <h6 className="title">{props.title}</h6>
          <p className="extra">{props.num_subscribers} subscribers</p>
        </div>
        <button
          className={`btn ${props.subscribed ? 'btn-faded' : 'btn-secondary'}`}
          onClick={props.btnClickFn.bind(null, {
            channel_id: props.channel_id,
          })}
        >
          {props.subscribed ? 'Unsubscribe' : 'Subscribe'}
        </button>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  </StyleWrapper>
);
ChannelRec.propTypes = Object.assign(channelType, {
  btnClickFn: PropTypes.func.isRequired,
}).isRequired;

export default ChannelRec;
