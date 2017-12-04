import React from 'react';
import styled from 'styled-components';
import { formatAgo } from 'lib/time';

import ChannelInfo from 'components/ChannelCard/components/ChannelInfo';
import ArticlePreview from 'components/ArticleCard/components/ArticlePreview';

const StyleWrapper = styled.div`
  display: flex;
  padding: 30px 50px;
  box-shadow: 0 0 15px 0 #ccc;
  margin-bottom: 20px;
  border-radius: 5px;
  .time {
    flex: 0 0 10%;
    margin-right: 30px;
  }
`;

const LogItem = props => {
  return (
    <StyleWrapper>
      <div className="time">
        {props.channel && formatAgo(new Date(props.channel.created_at))}
        {props.followed_channel &&
          formatAgo(new Date(props.followed_channel.created_at))}
        {props.article && formatAgo(new Date(props.article.created_at))}
        {props.liked_article &&
          formatAgo(new Date(props.liked_article.created_at))}
        {props.comment && formatAgo(new Date(props.comment.created_at))}
      </div>
      <div className="body">
        <h4 className="title">
          {props.channel && 'Created a new channel'}
          {props.followed_channel && 'Followed a channel'}
          {props.article && 'Posted an article'}
          {props.liked_article && 'Liked an article'}
          {props.comment && 'Commented on an article'}
        </h4>
        {props.channel && <ChannelInfo {...props.channel} />}
        {props.followed_channel && <ChannelInfo {...props.followed_channel} />}
        {props.article && <ArticlePreview {...props.article} />}
        {props.liked_article && <ArticlePreview {...props.liked_article} />}
        {props.comment && <ArticlePreview {...props.comment} />}
      </div>
    </StyleWrapper>
  );
};

export default LogItem;
