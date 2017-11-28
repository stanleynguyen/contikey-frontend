import React from 'react';
import styled from 'styled-components';

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

const UserInfo = () => (
  <StyleWrapper>
    <img
      className="img-fluid avatar"
      src="https://unsplash.it/400/400"
      alt="Avatar"
    />
    <h3 className="name">Teo Si-Yan</h3>
    <p className="bio">This is my bio! Not sure we're implementing it yet</p>
  </StyleWrapper>
);

export default UserInfo;
