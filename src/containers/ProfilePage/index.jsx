import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChannelCard from 'components/ChannelCard';
import ArticleCard from 'components/ArticleCard';
import UserCard from 'components/UserCard';
import TabsBar from './components/TabsBar';
import UserInfo from './components/UserInfo';
import Spinner from 'components/Spinner';
import { auth as authType, profile as profileType } from 'constants/propTypes';
import {
  profileLoadChannels,
  profileLoadArticles,
  profileLoadFollowing,
  profileLoadFriends,
} from 'actions';
import { LOADING } from 'constants/misc';

const StyleWrapper = styled.div`
  .container-fluid {
    padding: 0;
  }
  .container {
    padding: 20px;
  }
`;

class ProfilePage extends React.Component {
  state = {
    tab: 'channels',
  };
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string,
    }).isRequired,
    auth: authType.isRequired,
    profile: profileType.isRequired,
  };

  componentDidMount() {
    this.updateTab();
    this.props.profileLoadChannels();
    this.props.profileLoadArticles();
    this.props.profileLoadFriends();
    this.props.profileLoadFollowing();
  }
  componentDidUpdate() {
    this.updateTab();
  }

  updateTab = () => {
    const queryStringTab = new URLSearchParams(this.props.location.search).get(
      'tab',
    );
    if (queryStringTab && this.state.tab !== queryStringTab) {
      this.setState({ tab: queryStringTab });
    }
  };

  render() {
    const showSpinner =
      (this.state.tab === 'channels' &&
        this.props.profile.channels.status === LOADING) ||
      (this.state.tab === 'articles' &&
        this.props.profile.articles.status === LOADING) ||
      (this.state.tab === 'friends' &&
        this.props.profile.friends.status === LOADING) ||
      (this.state.tab === 'subscribed' &&
        this.props.profile.following.status === LOADING);
    return (
      <StyleWrapper>
        <Container fluid>
          <UserInfo
            photo={this.props.auth.user.photo}
            name={this.props.auth.user.name}
          />
          <TabsBar tab={this.state.tab} />
        </Container>
        <Container>
          <Row>
            <Col xs="12">
              {this.state.tab === 'channels' &&
                [...Array(10).keys()].map(i => <ChannelCard key={i} />)}
              {this.state.tab === 'articles' &&
                [...Array(10).keys()].map(i => <ArticleCard key={i} />)}
              {this.state.tab === 'friends' && (
                <Row>
                  {[...Array(10).keys()].map(i => (
                    <Col xs="6" key={i}>
                      <UserCard name="Si-Yan Teo" />
                    </Col>
                  ))}
                </Row>
              )}
              {this.state.tab === 'subscribed' &&
                [...Array(10).keys()].map(i => <ChannelCard key={i} />)}
              {showSpinner && <Spinner />}
            </Col>
          </Row>
        </Container>
      </StyleWrapper>
    );
  }
}

export default connect(({ auth, profile }) => ({ auth, profile }), {
  profileLoadChannels,
  profileLoadArticles,
  profileLoadFollowing,
  profileLoadFriends,
})(ProfilePage);
