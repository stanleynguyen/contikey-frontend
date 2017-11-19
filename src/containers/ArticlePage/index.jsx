import React from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupButton,
} from 'reactstrap';
import styled from 'styled-components';
import { PRIMARY } from '../../constants/colors';

import ArticleInfo from '../../components/ArticleInfo';
import Comment from './components/Comment';
import like from '../../assets/like.svg';
import send from '../../assets/send.svg';

const StyleWrapper = styled.div`
  height: calc(100vh - 75px);
  .container-fluid,
  .row,
  .left-section,
  .right-section,
  .view {
    width: 100%;
    height: 100%;
  }
  .left-section {
    .view {
      border-top: none;
      border-left: none;
      border-bottom: none;
    }
  }
  .right-section {
    padding: 20px 0;
    position: relative;
    .caption {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .like-container {
      display: flex;
      align-items: center;
      .like {
        background: transparent;
        border: none;
        padding: 0;
        img {
          height: 30px;
          width: 30px;
        }
      }
      .like-text {
        margin-left: 10px;
      }
    }
    .comment-section {
      max-height: 50vh;
      overflow-y: scroll;
      margin-top: 20px;
      &::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: transparent;
      }
    }
    .widget {
      position: absolute;
      bottom: 0;
      z-index: 2;
      padding: 5px 10px;
      width: calc(100% + 45px);
      margin-left: -15px;
      background: ${PRIMARY};
      .input-group {
        .form-control {
          border-top-left-radius: 9999px;
          border-bottom-left-radius: 9999px;
          border-right: none;
        }
        .btn-secondary {
          height: 40px;
          width: 40px;
          border-top-right-radius: 9999px;
          border-bottom-right-radius: 9999px;
        }
      }
    }
  }
`;

const ArticlePage = () => (
  <StyleWrapper>
    <Container fluid>
      <Row>
        <Col md="9" className="left-section">
          <iframe className="view" src="https://www.joe.co.uk/" />
        </Col>
        <Col md="3" className="right-section">
          <ArticleInfo />
          <p className="caption">
            hmm this is interesting! we acctually use emoticons rather than
            logic to make most of our daily decision
          </p>
          <div className="like-container">
            <button className="like">
              <img src={like} alt="Like" />
            </button>
            <span className="like-text">31 people like this</span>
          </div>
          <div className="comment-section">
            {[...Array(10).keys()].map(i => <Comment key={i} />)}
          </div>
          <div className="widget">
            <form>
              <InputGroup>
                <Input placeholder="Write a comment" />
                <InputGroupButton>
                  <button className="btn-secondary">
                    <img className="img-fluid" src={send} />
                  </button>
                </InputGroupButton>
              </InputGroup>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  </StyleWrapper>
);

export default ArticlePage;
