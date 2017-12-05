import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { NO_IMAGE_PLACEHOLDER } from 'constants/misc';

const StyleWrapper = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  margin: 0 50px 20px;
  box-shadow: 0 0 15px 0 #ccc;
  border-radius: 5px;
  &:hover,
  &:focus {
    text-decoration: none;
  }
  .avatar {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-right: 30px;
  }
  .name {
    color: #000;
    margin-bottom: 0;
    font-weight: 300;
  }
`;

const UserCard = props => (
  <StyleWrapper to={`/profile/${props.user_id}`}>
    <img className="avatar img-fluid" src={props.photo} alt="Avatar" />
    <h3 className="name">{props.name}</h3>
  </StyleWrapper>
);
UserCard.propTypes = {
  user_id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

UserCard.defaultProps = {
  photo: NO_IMAGE_PLACEHOLDER,
};

export default UserCard;
