import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleWrapper = styled(Link)`
  display: flex;
  max-height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  color: #000;
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
  }
  .photo-container {
    flex: 0 0 150px;
    height: auto;
    background: #fff;
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
`;

const ArticlePreview = () => (
  <StyleWrapper to="/article/1">
    <div className="photo-container">
      <img className="img-fluid" src="https://unsplash.it/400/400" />
    </div>
    <div className="detail">
      <h4 className="title"> What is the best programming lang for IoT</h4>
      <p className="text">
        Do you know which one is the best programming lang for IoT? Programming
        langs are behind every IoT enabled device and service
      </p>
      <p className="url">techworm.net</p>
    </div>
  </StyleWrapper>
);

export default ArticlePreview;
