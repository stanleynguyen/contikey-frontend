import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { loadExplore } from 'lib/articleService';
import ArticleCard from 'components/ArticleCard';
import Spinner from 'components/Spinner';

const StyleWrapper = styled.div``;

class ExplorePage extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    loadExplore().then(res => this.setState({ data: res.data }));
  }

  render() {
    return (
      <StyleWrapper>
        <Container>
          <Row>
            <Col>
              <h3 className="page-title">Top articles this month</h3>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              {!this.state.data && <Spinner />}
              {this.state.data &&
                this.state.data.length === 0 && <p>No results found :(</p>}
              {this.state.data &&
                this.state.data.map(a => (
                  <ArticleCard key={a.article_id} {...a} />
                ))}
            </Col>
          </Row>
        </Container>
      </StyleWrapper>
    );
  }
}

export default ExplorePage;
