import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px 0 #ccc;
  border-radius: 5px;
  .header {
    display: flex;
    height: 70px;
    .avatar {
      margin-right: 20px;
      border-radius: 50%;
      height: 100%;
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
  .body {
    padding: 20px 0;
    .caption {
      margin-bottom: 20px;
    }
    .preview {
      display: flex;
      max-height: 150px;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
      .photo-container {
        flex: 0 0 150px;
        height: auto;
        background: #fff;
        .photo {
          max-height: 100%;
          max-width: 100%;
          height: auto;
          width: auto;
        }
      }
      .detail {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px;
        .title,
        .text,
        .url {
          margin-bottom: 0;
        }
        .url {
          color: #999;
        }
      }
    }
  }
`;

const Article = () => (
  <StyleWrapper>
    <div className="header">
      <img className="avatar" src="https://unsplash.it/300/300" />
      <div className="info">
        <p className="user-to-channel">
          Siyan <span className="arrow">&gt;</span> Random
        </p>
        <p className="time-container">today &middot; 5 min read</p>
      </div>
    </div>
    <div className="body">
      <p className="caption">
        hmm this is interesting! we acctually use emoticons rather than logic to
        make most of our daily decision
      </p>
      <div className="preview">
        <div className="photo-container">
          <img className="photo" src="https://unsplash.it/400/400" />
        </div>
        <div className="detail">
          <h4 className="title"> What is the best programming lang for IoT</h4>
          <p className="text">
            Do you know which one is the best programming lang for IoT?
            Programming langs are behind every IoT enabled device and service
          </p>
          <p className="url">techworm.net</p>
        </div>
      </div>
    </div>
  </StyleWrapper>
);

export default Article;
