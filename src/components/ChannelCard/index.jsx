import React from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import StyleWrapper from './components/StyleWrapper';
import ArticlePreview from './components/ArticlePreview';

const ChannelCard = props => (
  <StyleWrapper>
    <Link className="plain" to={`/channel/${props.channel_id}`}>
      <div className="info">
        <img className="avatar img-fluid rounded-circle" src={props.avatar} />
        <div className="details">
          <h4 className="title">{props.title}</h4>
          <p className="faded">{props.num_subscribers} subscribers</p>
        </div>
      </div>
    </Link>
    <div className="articles">
      <Row>
        {props.articles.map(a => <ArticlePreview key={a.article_id} {...a} />)}
      </Row>
    </div>
  </StyleWrapper>
);

ChannelCard.defaultProps = {
  channel_id: 1,
  avatar: 'https://unsplash.it/300/300',
  title: 'Sport News',
  num_subscribers: 100,
  articles: [],
};

export default ChannelCard;
