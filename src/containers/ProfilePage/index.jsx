import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import ChannelCard from '../../components/ChannelCard';

const StyleWrapper = styled.div``;

const ProfilePage = () => (
  <StyleWrapper>
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
