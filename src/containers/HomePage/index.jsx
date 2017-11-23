import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';

import Article from './components/Article';
import ChannelRec from './components/ChannelRecommendation';

const StyleWrapper = styled.div`
  padding: 30px 0;
`;

const HomePage = () => (
  <StyleWrapper>
    <Container>
      <Row>
        <Col xs="8">{[...Array(10).keys()].map(i => <Article key={i} />)}</Col>
        <Col xs="4">
          {[...Array(10).keys()].map(i => <ChannelRec key={i} />)}
        </Col>
      </Row>
    </Container>
  </StyleWrapper>
);

export default HomePage;
