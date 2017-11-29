import React from 'react';
import { Link } from 'react-router-dom';

const ArticlePreview = () => (
  <Link to="/article/1" className="preview">
    <div className="photo-container">
      <img className="img-fluid" src="https://unsplash.it/400/400" />
    </div>
    <div className="detail">
      <h4 className="title"> What is the best programming lang for IoT</h4>
      <p className="text">
        Do you know which one is the best programming lang for IoT? Programming
        langs are behind every IoT enabled device and service
      </p>
      <p className="url">techworm.net</p>
    </div>
  </Link>
);

export default ArticlePreview;
