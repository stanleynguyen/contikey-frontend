import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .avatar {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
  .bio {
    margin-bottom: 0;
  }
`;

const UserInfo = ({ photo, name }) => (
  <StyleWrapper>
    <img className="img-fluid avatar" src={photo} alt="Avatar" />
    <h3 className="name">{name}</h3>
  </StyleWrapper>
);
UserInfo.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserInfo;
