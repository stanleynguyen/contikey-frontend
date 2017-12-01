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
    &.avatar {
      border-radius: 3px;
    }
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
  .input-group {
    width: 400px;
    margin-left: 20px;
    .input-group-btn {
      padding: 7px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .form-control {
      color: #fff;
      border: none;
      &:hover,
      &:focus {
        border: none;
      }
    }
    .input-group-btn,
    .form-control {
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;
