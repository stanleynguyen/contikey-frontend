import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { loadSearch } from 'lib/searchService';
import Spinner from 'components/Spinner';
import TabsBar from './components/TabsBar';
import ChannelCard from 'components/ChannelCard';
import ArticleCard from 'components/ArticleCard';
import UserCard from 'components/UserCard';

const StyleWrapper = styled.div`
  .container-fluid {
    padding: 0;
  }
  .container {
    padding: 20px 15px;
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
    let state = 'loading';
    if (this.state.data && this.state.data.length === 0) state = 'empty';
    if (this.state.data && this.state.data.length > 0) state = 'data';

    return (
      <StyleWrapper>
        <Container fluid>
          <h3 className="page-title">Searching for: {this.state.query}</h3>
          <TabsBar url={'?q=' + this.state.query + '&'} tab={this.state.tab} />
        </Container>
        <Container>
          <Row>
            <Col xs="12">
              {state == 'loading' && <Spinner />}
              {state == 'empty' && <p>No results found :(</p>}
              {state == 'data' &&
                this.state.tab === 'channels' &&
                this.state.data.map(c => (
                  <ChannelCard key={c['channel_id']} {...c} />
                ))}
              {state == 'data' &&
                this.state.tab === 'articles' &&
                this.state.data.map(a => (
                  <ArticleCard key={a['article_id']} {...a} />
                ))}
              {state == 'data' &&
                this.state.tab === 'users' && (
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
