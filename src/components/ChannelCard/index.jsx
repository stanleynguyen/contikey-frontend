import React from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { channel as channelType } from 'constants/propTypes';

import StyleWrapper from './components/StyleWrapper';
import ArticlePreview from './components/ArticlePreview';

const ChannelCard = props => (
  <StyleWrapper>
    <Link className="plain" to={`/channel/${props.channel_id}`}>
      <div className="info">
        <img
          className="avatar img-fluid rounded-circle"
          src={props.user.photo}
        />
        <div className="details">
          <h4 className="title">{props.title}</h4>
          <p className="faded">{props.num_subscribers || 0} subscribers</p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </Link>
    <div className="articles">
      <Row>
        {props.articles.map(a => <ArticlePreview key={a.article_id} {...a} />)}
      </Row>
    </div>
    <Link className="btn btn-invisible" to={`/channel/${props.channel_id}`}>
      See More
    </Link>
  </StyleWrapper>
);

ChannelCard.PropTypes = channelType.isRequired;

export default ChannelCard;
