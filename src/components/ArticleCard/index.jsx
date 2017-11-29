import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ArticleInfo from '../ArticleInfo';
import ArticlePreview from './components/ArticlePreview';
import StyleWrapper from './components/StyleWrapper';

const ArticleCard = props => (
  <StyleWrapper>
    <ArticleInfo showUser={props.showUser} />
    <div className="body">
      <p className="caption">
        hmm this is interesting! we acctually use emoticons rather than logic to
        make most of our daily decision
      </p>
      <ArticlePreview />
    </div>
  </StyleWrapper>
);

ArticleCard.propTypes = {
  showUser: PropTypes.bool,
};
ArticleCard.defaultProps = {
  showUser: true,
};

export default ArticleCard;
