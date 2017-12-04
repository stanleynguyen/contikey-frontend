import React from 'react';
import styled from 'styled-components';
import {
  articlePreview as articleType,
  channel as channelType,
} from 'constants/propTypes';

import ArticleInfo from '../ArticleInfo';
import ArticlePreview from './components/ArticlePreview';
import StyleWrapper from './components/StyleWrapper';

const ArticleCard = props => {
  return (
    <StyleWrapper>
      <ArticleInfo
        showUser={props.showUser}
        created_at={props.created_at}
        user={props.user}
        num_words={props.num_words}
        channel={props.channel}
      />
      <div className="body">
        <p className="caption">{props.caption}</p>
        <ArticlePreview
          article_id={props.article_id}
          preview_image={props.preview_image}
          preview_text={props.preview_text}
          preview_title={props.preview_title}
          url={props.url}
        />
      </div>
    </StyleWrapper>
  );
};

ArticleCard.propTypes = articleType.isRequired;
ArticleCard.propTypes.channel = channelType.isRequired;
ArticleCard.defaultProps = {
  showUser: true,
};

export default ArticleCard;
