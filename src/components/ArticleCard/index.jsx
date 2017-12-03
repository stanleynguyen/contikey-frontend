import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ArticleInfo from '../ArticleInfo';
import ArticlePreview from './components/ArticlePreview';
import StyleWrapper from './components/StyleWrapper';

const ArticleCard = props => {
  return (
    <StyleWrapper>
      <ArticleInfo {...props} />
      <div className="body">
        <p className="caption">{props.caption}</p>
        <ArticlePreview {...props} />
      </div>
    </StyleWrapper>
  );
};

ArticleCard.propTypes = {
  showUser: PropTypes.bool,
};
ArticleCard.defaultProps = {
  showUser: true,
  article_id: 1,
  caption:
    'hmm this is interesting! we actually use emotions rather than logic to make most of our daily decisions',
  channel: {
    channel_id: 1,
    title: 'Random channel title',
  },
  created_at: '2017-12-01T21:07:51',
  preview_image: 'https://unsplash.it/700/700',
  preview_text:
    'Do you know which one is the best programming lang for IoT? Programming langs are behind every IoT enabled device and service',
  preview_title: 'What is the best programming lang for IoT',
  shared_from_article_id: null,
  url: 'techworm.net',
  user: {
    user_id: 1,
    name: 'siyan',
    email: 'sy@sutd.edu',
    photo: 'https://picsum.photos/200/200?random',
  },
};

export default ArticleCard;
