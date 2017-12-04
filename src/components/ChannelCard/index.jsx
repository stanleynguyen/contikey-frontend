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
    <ChannelInfo
      user={props.user}
      title={props.title}
      description={props.description}
    />
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
