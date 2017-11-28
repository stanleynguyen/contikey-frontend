import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin: 20px auto;
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  p {
    margin-bottom: 0;
  }
  .preview-img {
    height: 150px;
    width: 100%;
    background: url(https://unsplash.it/700/700) no-repeat center center;
    background-size: cover;
    margin-bottom: 10px;
  }
  .title {
    color: #000;
  }
`;

const ArticlePreview = () => (
  <StyleWrapper className="col-3" to="/article/1">
    <div className="preview-img" />
    <h5 className="title">
      How Fallon Fox became the first known transgender athlete
    </h5>
    <p className="url">website.com</p>
  </StyleWrapper>
);

export default ArticlePreview;
