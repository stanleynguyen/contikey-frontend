import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { searchFetch } from 'actions';
import Spinner from 'components/Spinner';
import TabsBar from './components/TabsBar';
import ChannelCard from 'components/ChannelCard';
import ArticleCard from 'components/ArticleCard';
import UserCard from 'components/UserCard';
import { LOADING, SUCCESS, ERROR } from 'constants/misc';

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
    tab: '',
  };

  componentDidMount() {
    this.updateParams();

    // loadSearch(this.state.tab, this.state.query).then(res =>
    //   this.setState({ data: res.data }),
    // );
  }
  componentDidUpdate(prevProps, prevState) {
    this.updateParams();
    if (
      this.state.tab !== prevState.tab ||
      this.state.query !== prevState.query
    ) {
      this.props.searchFetch({
        searchType: this.state.tab,
        searchTerm: this.state.query,
      });
      // loadSearch(this.state.tab, this.state.query).then(
      //   res => console.log(res) || this.setState({ data: res.data }),
      // );
    }
  }

  updateParams = () => {
    const params = new URLSearchParams(this.props.location.search);
    let queryStringTab = params.get('tab');
    if (!queryStringTab) {
      queryStringTab = 'channels';
    }
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
    if (this.props.search.status == SUCCESS) {
      this.props.search.data.length > 0 ? (state = 'data') : 'empty';
    }
    // if (this.props.search.status == SUCCESS && this.props.search.data.length === 0) state = 'empty';
    // if (this.props.search.status == SUCCESS && this.props.search.data.length > 0) state = 'data';

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
                this.props.search.data.map(c => (
                  <ChannelCard
                    key={c['channel_id']}
                    {...c}
                    btnClickFn={() => {}}
                  />
                ))}
              {state == 'data' &&
                this.state.tab === 'articles' &&
                this.props.search.data.map(a => (
                  <ArticleCard key={a['article_id']} {...a} />
                ))}
              {state == 'data' &&
                this.state.tab === 'users' && (
                  <Row>
                    {this.props.search.data.map(u => (
                      <Col xs="6" key={u['user_id']}>
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

export default connect(({ auth, search }) => ({ auth, search }), {
  searchFetch,
})(SearchPage);
