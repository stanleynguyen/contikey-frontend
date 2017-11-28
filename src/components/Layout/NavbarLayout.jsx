import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  #content {
    padding-top: 75px;
  }
`;

import Navbar from './components/Navbar';

const Layout = props => (
  <StyleWrapper>
    <Navbar />
    <div id="content">{React.cloneElement(props.children, props)}</div>
  </StyleWrapper>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
