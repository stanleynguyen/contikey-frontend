import React from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { channel as channelType } from 'constants/propTypes';

import StyleWrapper from './components/StyleWrapper';
import ArticlePreview from './components/ArticlePreview';
import ChannelInfo from './components/ChannelInfo';

const ChannelCard = props => (
  <StyleWrapper>
    <div className="header">
      <ChannelInfo
        channel_id={props.channel_id}
        user={props.user}
        title={props.title}
        num_subscribers={props.num_subscribers}
        description={props.description}
      />
      <button
        className={`btn ${props.subscribed ? 'btn-faded' : 'btn-secondary'}`}
        onClick={props.btnClickFn.bind(null, {
          channel_id: props.channel_id,
        })}
      >
        {props.subscribed ? 'unsubscribed' : 'subscribe'}
      </button>
    </div>
    <div className="articles">
      <Row>
        {props.articles
          .slice(0, 4)
          .map(a => <ArticlePreview key={a.article_id} {...a} />)}
      </Row>
    </div>
    <Link className="btn btn-invisible" to={`/channel/${props.channel_id}`}>
      See More
    </Link>
  </StyleWrapper>
);

ChannelCard.PropTypes = channelType.isRequired;

export default ChannelCard;
