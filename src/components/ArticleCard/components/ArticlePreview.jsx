import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleWrapper = styled(Link)`
  display: flex;
  max-height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  color: #000;
  width: 800px;
  max-width: 100%;
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

ArticlePreview.propsType = {
  article_id: PropTypes.number.isRequired,
  preview_image: PropTypes.string.isRequired,
  preview_text: PropTypes.string.isRequired,
  preview_title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ArticlePreview;
