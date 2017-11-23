import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import ChannelCard from '../../components/ChannelCard';

const StyleWrapper = styled.div``;

const ExplorePage = () => (
  <StyleWrapper>
    <Container>
      <Row className="page-title">
        <Col>
          <h4>Recommended for you</h4>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          {[...Array(10).keys()].map(i => <ChannelCard key={i} />)}
        </Col>
      </Row>
    </Container>
  </StyleWrapper>
);

export default ExplorePage;
