import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import ArticleCard from '../../components/ArticleCard';
import ChannelRec from './components/ChannelRecommendation';

const StyleWrapper = styled.div`
  padding: 30px 0;
`;

import { history } from '../../store';

const HomePage = () => (
  <StyleWrapper>
    <Container>
      <Row>
        <Col xs="8">
          {[...Array(10).keys()].map(i => <ArticleCard key={i} />)}
        </Col>
        <Col xs="4">
          {[...Array(10).keys()].map(i => <ChannelRec key={i} />)}
        </Col>
      </Row>
    </Container>
  </StyleWrapper>
);

export default HomePage;
