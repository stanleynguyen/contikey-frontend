import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { history } from 'store';
import { searchFetch, searchSubChan } from 'actions';
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

  handleSubBtnClick = ({ channel_id }) => {
    if (this.props.auth.status !== SUCCESS) {
      history.push('/login', { modal: true });
    } else {
      const subStatus = this.props.search.channels.find(
        v => v.channel_id === channel_id,
      ).subscribed;
      this.props.searchSubChan({ channel_id, sub: !subStatus });
    }
  };

  render() {
    return (
      <StyleWrapper>
        <Container fluid>
          <h3 className="page-title">Searching for: {this.state.query}</h3>
          <TabsBar
            url={'?q=' + this.state.query + '&'}
            tab={this.props.search.tab}
          />
        </Container>
        <Container>
          <Row>
            <Col xs="12">
              {this.props.search.status == LOADING && <Spinner />}
              {this.props.search.status == SUCCESS &&
                this.props.search.tab === 'channels' &&
                this.props.search.channels.map(c => (
                  <ChannelCard
                    key={c['channel_id']}
                    {...c}
                    btnClickFn={this.handleSubBtnClick}
                  />
                ))}
              {this.props.search.status == SUCCESS &&
                this.props.search.tab === 'articles' &&
                this.props.search.articles.map(a => (
                  <ArticleCard key={a['article_id']} {...a} />
                ))}
              {this.props.search.status == SUCCESS &&
                this.props.search.tab === 'users' && (
                  <Row>
                    {this.props.search.users.map(u => (
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
  searchSubChan,
})(SearchPage);
