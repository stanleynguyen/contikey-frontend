import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleWrapper = styled.div`
  background: ${props => (props.new ? '#edf2fa' : '#fff')};
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  .img-fluid {
    flex: 0 0 70px;
    height: 70px;
    width: auto;
    border-radius: 50%;
  }
  .content {
    margin-left: 20px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0;
    }
  }
`;

const Notification = props => (
  <StyleWrapper new={props.new}>
    <img className="img-fluid" src="https://unsplash.it/100/100" />
    <div className="content">
      <p>
        <strong>Vivek Kalyan</strong> commented on your article
      </p>
    </div>
  </StyleWrapper>
);
Notification.propTypes = {
  new: PropTypes.bool.isRequired,
};

export default Notification;
