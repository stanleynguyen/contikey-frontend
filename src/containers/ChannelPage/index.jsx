import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'reactstrap';

import ChannelInfo from './components/ChannelInfo';
import ArticleCard from 'components/ArticleCard';

const StyleWrapper = styled.div`
  padding: 30px 0;
`;

const ChannelPage = () => (
  <StyleWrapper>
    <Container>
      <Row>
        <Col xs="8">
          {[...Array(10).keys()].map(i => (
            <ArticleCard key={i} showUser={false} />
          ))}
        </Col>
        <Col xs="4">
          <ChannelInfo />
        </Col>
      </Row>
    </Container>
  </StyleWrapper>
);

export default ChannelPage;
