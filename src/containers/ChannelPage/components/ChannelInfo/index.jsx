import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  padding-left: 50px;
  position: fixed;

  .channel-header {
    display: flex;
    align-items: center;
    .avatar {
      margin-right: 20px;
      border-radius: 50%;
      height: 70px;
      width: auto;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        margin-bottom: 0;
      }
      .user-to-channel {
        font-size: 1.5rem;
        font-weight: 300;
      }
      .time-container {
        color: #999;
      }
    }
  }
  .channel-body {
    font-size: 0.9rem;
    margin-top: 20px;
  }
`;

const ChannelInfo = () => (
  <StyleWrapper>
    <div className="channel-header">
      <img className="avatar" src="https://unsplash.it/300/300" />
      <div className="info">
        <p className="user-to-channel">Random</p>
        <p>by Teo Si-Yan</p>
        <p className="time-container">123 subscribers</p>
      </div>
    </div>
    <div className="channel-body">
      <p>Insert channel description here.</p>
      <p>Tags: tech, sports, arts, everything</p>
    </div>
  </StyleWrapper>
);

export default ChannelInfo;
