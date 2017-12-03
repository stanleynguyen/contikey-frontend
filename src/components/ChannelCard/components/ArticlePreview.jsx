import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NO_IMAGE_PLACEHOLDER } from 'constants/misc';

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
    background: ${props => `url('${props.img}') no-repeat center center`};
    background-size: cover;
    margin-bottom: 10px;
  }
  .title {
    color: #000;
  }
`;

const ArticlePreview = props => (
  <StyleWrapper
    className="col-3"
    to={`/article/${props.article_id}`}
    img={props.preview_image ? props.preview_image : NO_IMAGE_PLACEHOLDER}
  >
    <div className="preview-img" />
    <h5 className="title">{props.preview_title}</h5>
    <p className="faded">{props.url}</p>
  </StyleWrapper>
);

ArticlePreview.propTypes = {
  data: PropTypes.shape({
    article_id: PropTypes.number,
    preview_image: PropTypes.string,
    preview_title: PropTypes.string,
    url: PropTypes.string,
  }),
};

ArticlePreview.defaultProps = {
  article_id: 1,
  preview_image: 'https://unsplash.it/700/700',
  preview_title: 'How Fallon Fox became the first known transgender athlete',
  url: 'website.com',
};

export default ArticlePreview;
