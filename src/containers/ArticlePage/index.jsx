import React from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupButton,
} from 'reactstrap';

import ArticleInfo from '../../components/ArticleInfo';
import Comment from './components/Comment';
import like from '../../assets/like.svg';
import send from '../../assets/send.svg';

import StyleWrapper from './components/StyleWrapper';

const ArticlePage = () => (
  <StyleWrapper>
    <Container fluid>
      <Row>
        <Col md="9" className="left-section">
          <iframe
            className="view"
            src="https://en.wikipedia.org/wiki/Singapore_University_of_Technology_and_Design"
          />
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
