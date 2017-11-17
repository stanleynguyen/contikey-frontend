import React from 'react';
import PropTypes from 'prop-types';

import Stylesheet from '../Stylesheet';
import Navbar from './components/Navbar';

const Layout = props => (
  <Stylesheet>
    <Navbar />
    <div id="content">{React.cloneElement(props.children, props)}</div>
  </Stylesheet>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
