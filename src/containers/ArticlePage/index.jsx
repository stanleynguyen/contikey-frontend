import React from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupButton,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ArticleInfo from '../../components/ArticleInfo';
import Comment from './components/Comment';
import like from '../../assets/like.svg';
import send from '../../assets/send.svg';
import StyleWrapper from './components/StyleWrapper';
import { articleFetch, articleLike, articleUnlike } from 'actions';
import { SUCCESS, LOADING } from 'constants/misc';
import Spinner from 'components/Spinner';
import { article as articleType, auth as authType } from 'constants/propTypes';
import { history } from 'store';

class ArticlePage extends React.Component {
  static propTypes = {
    article: articleType.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({ article_id: PropTypes.string.isRequired })
        .isRequired,
    }).isRequired,
    auth: authType.isRequired,
  };

  componentDidMount() {
    const { article_id } = this.props.match.params;
    this.props.articleFetch({ article_id });
  }
  componentDidUpdate(prevProps) {
    const { article_id } = this.props.match.params;
    if (article_id !== prevProps.match.params.article_id) {
      this.props.articleFetch({ article_id });
    }
  }

  handleLikeClick = () => {
    if (
      this.props.auth.status !== SUCCESS ||
      this.props.article.status === LOADING
    ) {
      history.push('/login', { modal: true });
    } else if (!this.props.article.liked) {
      this.props.articleLike();
    } else if (this.props.article.liked) {
      this.props.articleUnlike();
    }
  };

  render() {
    return (
      <StyleWrapper>
        <Container fluid>
          {this.props.article.status === LOADING && (
            <div className="spinner-container">
              <Spinner />
            </div>
          )}
          {this.props.article.status === SUCCESS && (
            <Row>
              <Col md="9" className="left-section">
                <iframe className="view" src={this.props.article.url} />
              </Col>
              <Col md="3" className="right-section">
                <ArticleInfo
                  user={this.props.article.user}
                  created_at={this.props.article.created_at}
                />
                <p className="caption">{this.props.article.caption}</p>
                <div className="like-container">
                  <button
                    className={`like ${this.props.article.liked
                      ? ''
                      : 'inverted'}`}
                    onClick={this.handleLikeClick}
                  >
                    <img src={like} alt="Like" />
                  </button>
                  <span className="like-text">
                    {this.props.article.likes} people like this
                  </span>
                </div>
                <div className="comment-section">
                  {this.props.article.comments.map(c => (
                    <Comment {...c} key={c.comment_id} />
                  ))}
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
          )}
        </Container>
      </StyleWrapper>
    );
  }
}

export default connect(({ article, auth }) => ({ article, auth }), {
  articleFetch,
  articleLike,
  articleUnlike,
})(ArticlePage);
