import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { loadSearch } from 'lib/searchService';

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
    data: null,
  };

  componentDidMount() {
    this.updateParams();
    loadSearch(this.state.tab, this.state.query).then(res =>
      this.setState({ data: res.data }),
    );
  }
  componentDidUpdate(prevProps, prevState) {
    this.updateParams();
    if (
      this.state.tab !== prevState.tab ||
      this.state.query !== prevState.query
    ) {
      loadSearch(this.state.tab, this.state.query).then(res =>
        this.setState({ data: res.data }),
      );
    }
  }

  updateParams = () => {
    const params = new URLSearchParams(this.props.location.search);
    const queryStringTab = params.get('tab');
    const queryString = params.get('q');
    if (queryStringTab && this.state.tab !== queryStringTab) {
      this.setState({ tab: queryStringTab, data: null });
    }
    if (queryString && this.state.query !== queryString) {
      this.setState({ query: queryString, data: null });
    }
  };

  render() {
    if (!this.state.data) return <p>No data found</p>;

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
                this.state.data.map(c => (
                  <ChannelCard key={c['channel_id']} {...c} />
                ))}
              {this.state.tab === 'articles' &&
                this.state.data.map(a => (
                  <ArticleCard key={a['article_id']} {...a} />
                ))}
              {this.state.tab === 'users' && (
                <Row>
                  {this.state.data.map(u => (
                    <Col xs="6">
                      <UserCard key={u['user_id']} {...u} />
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
