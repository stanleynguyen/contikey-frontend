import React from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';

import StyleWrapper from './components/StyleWrapper';
import ArticlePreview from './components/ArticlePreview';

const Channel = () => (
  <StyleWrapper>
    <div className="info">
      <img
        className="avatar img-fluid rounded-circle"
        src="https://unsplash.it/300/300"
      />
      <div className="details">
        <h4 className="title">Sport News</h4>
        <p className="extra">231 subscribers</p>
      </div>
    </div>
    <div className="articles">
      <Row>{[...Array(4).keys()].map(i => <ArticlePreview key={i} />)}</Row>
    </div>
    <button className="btn btn-invisible">See More</button>
  </StyleWrapper>
);

export default Channel;
