import React from 'react';

import StyleWrapper from './components/StyleWrapper';

const ChannelRec = () => (
  <StyleWrapper>
    <div className="photo-container">
      <img className="photo img-fluid" src="https://unsplash.it/300/300" />
    </div>
    <div className="info-container">
      <div className="header">
        <div className="info">
          <h6 className="title">Sport News by Tom</h6>
          <p className="extra">231 subscribers &middot; posts daily</p>
        </div>
        <button className="btn btn-secondary">Subscribe</button>
      </div>
      <div className="description">
        <p>
          mostly US basketball and soccer news. Diehard Liverpool supporter (wtf
          how are these 2 related???)
        </p>
      </div>
    </div>
  </StyleWrapper>
);

export default ChannelRec;
