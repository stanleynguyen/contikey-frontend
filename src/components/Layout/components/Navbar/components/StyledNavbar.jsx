import styled from 'styled-components';
import { Navbar } from 'reactstrap';
import { PRIMARY } from '../../../../../constants/colors';

export default styled(Navbar)`
  background-color: ${PRIMARY};
  .logo {
    height: 50px;
    width: auto;
    filter: invert(100%);
  }
  .navbar-icon {
    height: 30px;
    width: auto;
  }
  .navbar-nav .nav-link {
    padding: 0;
    margin: auto 0.5rem;
    &:hover,
    &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }
  .btn {
    background: transparent;
    border: none;
    position: relative;
    cursor: pointer;
  }
  .badge {
    background-color: #fa3e3e;
    border-radius: 2px;
    padding: 1px 3px;
    font-size: 10px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;