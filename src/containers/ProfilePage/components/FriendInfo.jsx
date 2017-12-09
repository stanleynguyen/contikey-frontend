import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { user as userType } from 'constants/propTypes';

const StyleWrapper = styled(Link)`
  .info {
    display: flex;
    align-items: center;
    height: 90px;
    .avatar {
      margin-right: 30px;
    }
    .details {
      h4 {
        margin-bottom: 0;
      }
      .name {
        font-weight: 300;
      }
    }
  }
`;

const UserInfo = props => (
  <StyleWrapper className="plain" to={`/profile/${props.user_id}`}>
    <div className="info">
      <img className="avatar img-fluid rounded-circle" src={props.photo} />
      <div className="details">
        <h4 className="name">{props.name}</h4>
      </div>
    </div>
  </StyleWrapper>
);
UserInfo.propTypes = userType.isRequired;

export default UserInfo;
