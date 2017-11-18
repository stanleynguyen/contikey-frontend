import React from 'react';
import styled from 'styled-components';
import {} from '../../../constants/colors';

const StyleWrapper = styled.div`
  box-shadow: 0 0 15px 0 #ccc;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  .photo-container {
    flex: 0 0 50px;
    height: 50px;
    .photo {
      border-radius: 50%;
      max-height: 100%;
      max-width: 100%;
      height: auto;
      width: auto;
    }
  }
  .info-container {
    font-size: 0.8rem;
    .header {
      display: flex;
      height: 50px;
      align-items: center;
      justify-content: space-around;
      .info {
        .title,
        .extra {
          margin-bottom: 0;
        }
        .extra {
          color: #999;
        }
      }
      .btn-secondary {
        height: 20px;
        padding: 0 10px;
        text-transform: uppercase;
        font-size: 0.7rem;
      }
    }
  }
`;

const ChannelRec = () => (
  <StyleWrapper>
    <div className="photo-container">
      <img className="photo" src="https://unsplash.it/300/300" />
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
