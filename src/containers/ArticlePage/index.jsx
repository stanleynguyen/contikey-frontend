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
import sad from 'assets/sad-wolf.jpg';
import StyleWrapper from './components/StyleWrapper';
import {
  articleFetch,
  articleLike,
  articleUnlike,
  articleComment,
} from 'actions';
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
    if (
      prevProps.article.comment_status === LOADING &&
      this.props.article.comment_status === SUCCESS
    ) {
      this.commentInput.value = '';
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
  handleCommentFocus = () =>
    this.props.auth.status !== SUCCESS &&
    history.push('/login', { modal: true });
  handleCommentSubmit = e => {
    e.preventDefault();
    const { article_id } = this.props.article;
    const comment_text = this.commentInput.value;
    if (!comment_text || comment_text === '') return;
    this.props.articleComment({ article_id, comment_text });
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
                {!this.props.article.preview_x_frame_options && (
                  <iframe className="view" src={this.props.article.url} />
                )}
                {this.props.article.preview_x_frame_options && (
                  <div className="sorry">
                    <h6>
                      Seems like the host doesn't let us display the page.
                      Please view it directly{' '}
                      <a href={this.props.article.url} target="blank">
                        here
                      </a>
                    </h6>
                    <img className="img-fluid" src={sad} />
                  </div>
                )}
              </Col>
              <Col md="3" className="right-section">
                <ArticleInfo
                  user={this.props.article.user}
                  created_at={this.props.article.created_at}
                  num_words={this.props.article.num_words}
                  channel={this.props.article.channel}
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
                  <form onSubmit={this.handleCommentSubmit}>
                    <InputGroup>
                      <Input
                        placeholder="Write a comment"
                        innerRef={i => (this.commentInput = i)}
                        disabled={this.props.article.comment_status === LOADING}
                        onFocus={this.handleCommentFocus}
                      />
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
  articleComment,
})(ArticlePage);
