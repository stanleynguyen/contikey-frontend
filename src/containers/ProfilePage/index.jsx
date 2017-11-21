import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import Channel from './components/Channel';

const StyleWrapper = styled.div``;

const ProfilePage = () => (
  <StyleWrapper>
    <Container>
      <Row>
        <Col md="12">{[...Array(10).keys()].map(i => <Channel key={i} />)}</Col>
      </Row>
    </Container>
  </StyleWrapper>
);

export default ProfilePage;
