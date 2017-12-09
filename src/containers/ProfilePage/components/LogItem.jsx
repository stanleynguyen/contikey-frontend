import React from 'react';
import styled from 'styled-components';
import { formatAgo } from 'lib/time';
import PropTypes from 'prop-types';
import { user as userType } from 'constants/propTypes';

import ChannelInfo from 'components/ChannelCard/components/ChannelInfo';
import ArticlePreview from 'components/ArticleCard/components/ArticlePreview';
import FriendInfo from './FriendInfo';

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
        {props.channel && formatAgo(props.channel.created_at)}
        {props.followed_channel && formatAgo(props.followed_channel.created_at)}
        {props.article && formatAgo(props.article.created_at)}
        {props.liked_article && formatAgo(props.liked_article.created_at)}
        {props.comment && formatAgo(props.comment.created_at)}
        {props.friend && formatAgo(props.friend.created_at)}
      </div>
      <div className="body">
        <h4 className="title">
          {props.channel && 'Created a new channel'}
          {props.followed_channel && 'Followed a channel'}
          {props.article && 'Posted an article'}
          {props.liked_article && 'Liked an article'}
          {props.comment && 'Commented on an article'}
          {props.friend && 'Made a new friend'}
        </h4>
        {props.channel && <ChannelInfo {...props.channel} />}
        {props.followed_channel && <ChannelInfo {...props.followed_channel} />}
        {props.article && <ArticlePreview {...props.article} />}
        {props.liked_article && <ArticlePreview {...props.liked_article} />}
        {props.comment && <ArticlePreview {...props.comment} />}
        {props.friend && <FriendInfo {...props.friend} />}
      </div>
    </StyleWrapper>
  );
};
const channelShape = PropTypes.shape({
  channel_id: PropTypes.number.isRequired,
  user: userType.isRequired,
  title: PropTypes.string.isRequired,
  num_subscribers: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
});
const articleShape = PropTypes.shape({
  article_id: PropTypes.number.isRequired,
  preview_image: PropTypes.string.isRequired,
  preview_title: PropTypes.string.isRequired,
  preview_text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
LogItem.propTypes = {
  channel: channelShape,
  followed_channel: channelShape,
  article: articleShape,
  liked_article: articleShape,
  comment: articleShape,
};

export default LogItem;
