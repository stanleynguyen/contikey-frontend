import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import ChannelCard from '../../components/ChannelCard';
import TabsBar from './components/TabsBar';
import UserInfo from './components/UserInfo';

const StyleWrapper = styled.div`
  .container-fluid {
    padding: 0;
  }
`;

const ProfilePage = () => (
  <StyleWrapper>
    <Container fluid>
      <UserInfo />
      <TabsBar />
    </Container>
    <Container>
      <Row>
        <Col md="12">
          {[...Array(10).keys()].map(i => <ChannelCard key={i} />)}
        </Col>
      </Row>
    </Container>
  </StyleWrapper>
);

export default ProfilePage;
