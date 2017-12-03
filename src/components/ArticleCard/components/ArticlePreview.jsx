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
  }
`;

const ArticlePreview = props => (
  <StyleWrapper to={`/article/${props.article_id}`}>
    <div className="photo-container">
      <img className="img-fluid" src={props.preview_image} />
    </div>
    <div className="detail">
      <h4 className="title">{props.preview_title}</h4>
      <p className="text">{props.preview_text}</p>
      <p className="url faded">{props.url}</p>
    </div>
  </StyleWrapper>
);

ArticlePreview.defaultProps = {
  article_id: 1,
  preview_image: 'https://unsplash.it/400/400',
  preview_title: 'What is the best programming lang for IoT',
  preview_text:
    'Do you know which one is the best programming lang for IoT? Programming langs are behind every IoT enabled device and service',
  url: 'techworm.net',
};

export default ArticlePreview;
