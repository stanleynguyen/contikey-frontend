import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ArticleInfo from '../../../../components/ArticleInfo';
import StyleWrapper from './components/StyleWrapper';

const Article = () => (
  <StyleWrapper>
    <ArticleInfo />
    <div className="body">
      <p className="caption">
        hmm this is interesting! we acctually use emoticons rather than logic to
        make most of our daily decision
      </p>
      <Link to="/article/1" className="preview">
        <div className="photo-container">
          <img className="img-fluid" src="https://unsplash.it/400/400" />
        </div>
        <div className="detail">
          <h4 className="title"> What is the best programming lang for IoT</h4>
          <p className="text">
            Do you know which one is the best programming lang for IoT?
            Programming langs are behind every IoT enabled device and service
          </p>
          <p className="url">techworm.net</p>
        </div>
      </Link>
    </div>
  </StyleWrapper>
);

export default Article;
