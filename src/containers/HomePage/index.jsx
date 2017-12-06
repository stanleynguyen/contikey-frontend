import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { feed as feedType, auth as authType } from 'constants/propTypes';
import {
  feedFetch,
  feedPaginate,
  feedGetRec,
  feedSubscribeRec,
  feedUnsubscribeRec,
} from 'actions';
import ArticleCard from '../../components/ArticleCard';
import ChannelRec from './components/ChannelRecommendation';
import { LOADING, SUCCESS } from 'constants/misc';
import Spinner from 'components/Spinner';
import { history } from '../../store';

const StyleWrapper = styled.div`
  padding: 30px 0;
`;

class HomePage extends React.Component {
  static propTypes = {
    feed: feedType.isRequired,
    auth: authType.isRequired,
  };
  scrollBuffering = false;

  componentDidMount() {
    this.props.feedFetch();
    this.props.feedGetRec();
    document.addEventListener('scroll', this.handleScroll);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.auth.status !== this.props.auth.status &&
      this.props.auth.status !== LOADING
    ) {
      this.props.feedFetch();
      this.props.feedGetRec();
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

  handleSubBtnClick = ({ channel_id }) => {
    if (this.props.auth.status !== SUCCESS) {
      history.push('/login', { modal: true });
    } else {
      const subStatus = this.props.feed.recommendations.find(
        v => v.channel_id === channel_id,
      ).subscribed;

      subStatus
        ? this.props.feedUnsubscribeRec({ channel_id })
        : this.props.feedSubscribeRec({ channel_id });
    }
  };

  render() {
    return (
      <StyleWrapper>
        <Container>
          <Row>
            <div className="col-8" ref={i => (this.articleStream = i)}>
              {this.props.feed.articles.map(v => (
                <ArticleCard key={v.article_id} {...v} />
              ))}
            </div>
            <Col xs="4">
              {this.props.feed.recommendations.map(v => (
                <ChannelRec
                  key={v.channel_id}
                  {...v}
                  btnClickFn={this.handleSubBtnClick}
                />
              ))}
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
  feedGetRec,
  feedSubscribeRec,
  feedUnsubscribeRec,
})(HomePage);
