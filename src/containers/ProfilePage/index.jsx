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
import LogItem from './components/LogItem';
import { auth as authType, profile as profileType } from 'constants/propTypes';
import {
  profileLoadChannels,
  profileLoadArticles,
  profileLoadFollowing,
  profileLoadFriends,
  profileLoadLog,
  profileLoadUser,
} from 'actions';
import { LOADING, SUCCESS } from 'constants/misc';
import { history } from 'store';

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
      search: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({ profile_id: PropTypes.string }).isRequired,
    }).isRequired,
    auth: authType.isRequired,
    profile: profileType.isRequired,
  };

  componentDidMount() {
    this.redirectIfMyOwnProfile();
    this.updateTab();
    this.loadData();
  }
  componentDidUpdate(prevProps) {
    this.updateTab();
    if (this.props.auth.status !== prevProps.auth.status) {
      this.redirectIfMyOwnProfile();
      if (!this.props.match.params.profile_id) this.loadData();
    }
    if (
      this.props.match.params.profile_id !== prevProps.match.params.profile_id
    ) {
      this.redirectIfMyOwnProfile();
      this.loadData();
    }
  }

  redirectIfMyOwnProfile = () => {
    if (
      this.props.auth.status === SUCCESS &&
      this.props.auth.user.user_id ===
        parseInt(this.props.match.params.profile_id)
    ) {
      history.push('/profile');
    }
  };
  loadData = () => {
    const user_id = this.props.match.params.profile_id;
    this.props.profileLoadUser({ user_id });
    this.props.profileLoadChannels({ user_id });
    this.props.profileLoadArticles({ user_id });
    this.props.profileLoadFriends({ user_id });
    this.props.profileLoadFollowing({ user_id });
    if (!user_id) this.props.profileLoadLog();
  };
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
        this.props.profile.following.status === LOADING) ||
      (this.state.tab === 'log' && this.props.profile.log.status === LOADING);
    return (
      <StyleWrapper>
        <Container fluid>
          <UserInfo
            photo={this.props.profile.user.value.photo}
            name={this.props.profile.user.value.name}
          />
          <TabsBar
            tab={this.state.tab}
            showLog={!this.props.match.params.profile_id}
            channelCount={this.props.profile.channels.value.length}
            articleCount={this.props.profile.articles.value.length}
            friendCount={this.props.profile.friends.value.length}
            followingCount={this.props.profile.following.value.length}
            user_id={this.props.match.params.profile_id}
          />
        </Container>
        <Container>
          <Row>
            <Col xs="12">
              {this.state.tab === 'channels' &&
                this.props.profile.channels.value.map(c => (
                  <ChannelCard
                    key={c.channel_id}
                    user={this.props.profile.user.value}
                    {...c}
                    articles={this.props.profile.articles.value
                      .filter(v => v.channel_id === c.channel_id)
                      .map(v =>
                        Object.assign({}, v, {
                          user: this.props.profile.user.value,
                        }),
                      )}
                  />
                ))}
              {this.state.tab === 'articles' &&
                this.props.profile.articles.value.map(v => (
                  <ArticleCard
                    key={v.article_id}
                    {...v}
                    user={this.props.profile.user.value}
                  />
                ))}
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
                this.props.profile.following.value.map(v => (
                  <ChannelCard key={v.channel_id} {...v} />
                ))}
              {this.state.tab === 'log' &&
                this.props.profile.log.value.map((v, i) => (
                  <LogItem {...v} key={i} />
                ))}
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
  profileLoadLog,
  profileLoadUser,
})(ProfilePage);
