import React from 'react';
import styled from 'styled-components';

import ArticleInfo from '../ArticleInfo';
import ArticlePreview from './components/ArticlePreview';
import StyleWrapper from './components/StyleWrapper';

const ArticleCard = () => (
  <StyleWrapper>
    <ArticleInfo />
    <div className="body">
      <p className="caption">
        hmm this is interesting! we acctually use emoticons rather than logic to
        make most of our daily decision
      </p>
      <ArticlePreview />
    </div>
  </StyleWrapper>
);

export default ArticleCard;
