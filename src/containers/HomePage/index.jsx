import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { feed as feedType, auth as authType } from 'constants/propTypes';
import { feedFetch, feedPaginate } from 'actions';
import ArticleCard from '../../components/ArticleCard';
import ChannelRec from './components/ChannelRecommendation';
import { LOADING } from 'constants/misc';
import Spinner from 'components/Spinner';

const StyleWrapper = styled.div`
  padding: 30px 0;
`;

import { history } from '../../store';

class HomePage extends React.Component {
  static propTypes = {
    feed: feedType.isRequired,
    auth: authType.isRequired,
  };
  scrollBuffering = false;

  componentDidMount() {
    this.props.feedFetch();
    document.addEventListener('scroll', this.handleScroll);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.auth.status !== this.props.auth.status) {
      this.props.feedFetch();
    }
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.scrollBuffering) return;
    this.scrollBuffering = true;
    setTimeout(() => (this.scrollBuffering = false), 100);
    if (
      this.props.feed.status !== LOADING &&
      window.pageYOffset + window.innerHeight >=
        this.articleStream.offsetTop + this.articleStream.scrollHeight
    ) {
      this.props.feedPaginate();
    }
  };

  render() {
    return (
      <StyleWrapper>
        <Container>
          <Row>
            <div className="col-8" ref={i => (this.articleStream = i)}>
              {this.props.feed.articles.map(i => <ArticleCard key={i} />)}
            </div>
            <Col xs="4">
              {[...Array(10).keys()].map(i => <ChannelRec key={i} />)}
            </Col>
          </Row>
          {this.props.feed.status === LOADING && <Spinner />}
        </Container>
      </StyleWrapper>
    );
  }
}

export default connect(({ auth, feed }) => ({ auth, feed }), {
  feedFetch,
  feedPaginate,
})(HomePage);
