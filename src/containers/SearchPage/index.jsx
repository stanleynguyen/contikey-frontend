import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import TabsBar from './components/TabsBar';
import ChannelCard from 'components/ChannelCard';
import ArticleCard from 'components/ArticleCard';
import UserCard from 'components/UserCard';

const StyleWrapper = styled.div`
  .search-title {
    text-align: center;
    padding: 20px;
  }
  .container-fluid {
    padding: 0;
  }
  .container {
    padding: 20px;
  }
`;

class SearchPage extends React.Component {
  state = {
    query: '',
    tab: 'channels',
  };

  componentDidMount() {
    this.updateParams();
  }
  componentDidUpdate() {
    this.updateParams();
  }

  updateParams = () => {
    const params = new URLSearchParams(this.props.location.search);
    const queryStringTab = params.get('tab');
    const queryString = params.get('q');
    if (queryStringTab && this.state.tab !== queryStringTab) {
      this.setState({ tab: queryStringTab });
    }
    if (queryString && this.state.query !== queryString) {
      this.setState({ query: queryString });
    }
  };

  render() {
    return (
      <StyleWrapper>
        <Container fluid>
          <h3 className="search-title">Searching for: {this.state.query}</h3>
          <TabsBar url={'?q=' + this.state.query + '&'} tab={this.state.tab} />
        </Container>
        <Container>
          <Row>
            <Col xs="12">
              {this.state.tab === 'channels' &&
                [...Array(10).keys()].map(i => <ChannelCard key={i} />)}
              {this.state.tab === 'articles' &&
                [...Array(10).keys()].map(i => <ArticleCard key={i} />)}
              {this.state.tab === 'users' && (
                <Row>
                  {[...Array(10).keys()].map(i => (
                    <Col xs="6" key={i}>
                      <UserCard name="Si-Yan Teo" />
                    </Col>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </StyleWrapper>
    );
  }
}

export default SearchPage;
