import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ChannelCard from '../../components/ChannelCard';
import TabsBar from './components/TabsBar';
import UserInfo from './components/UserInfo';
import ArticleCard from '../../components/ArticleCard';
import FriendCard from './components/FriendCard';

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
  };

  componentDidMount() {
    this.updateTab();
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
    return (
      <StyleWrapper>
        <Container fluid>
          <UserInfo />
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
                      <FriendCard name="Si-Yan Teo" />
                    </Col>
                  ))}
                </Row>
              )}
              {this.state.tab === 'subscribed' &&
                [...Array(10).keys()].map(i => <ChannelCard key={i} />)}
            </Col>
          </Row>
        </Container>
      </StyleWrapper>
    );
  }
}

export default ProfilePage;
