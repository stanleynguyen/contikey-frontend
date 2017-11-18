import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';

import Article from './components/Article';

const StyleWrapper = styled.div``;

const HomePage = () => (
  <StyleWrapper>
    <Container>
      <Row>
        <Col md="9">
          {[...Array(10).keys()].map(
            i => console.log(i) || <Article key={i} />,
          )}
        </Col>
        <Col md="3" />
      </Row>
    </Container>
  </StyleWrapper>
);

export default HomePage;
