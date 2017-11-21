import styled from 'styled-components';
import { PRIMARY, SECONDARY, ACCENT } from '../../constants/colors';

export default styled.div`
  #content {
    padding-top: 75px;
  }
  .btn {
    cursor: pointer;
  }
  .btn-secondary {
    background-color: ${SECONDARY};
    border-color: ${SECONDARY};
    color: #fff;
  }
  .btn-invisible {
    background: transparent;
    border: none;
    color: ${ACCENT};
    &:hover {
      background: ${ACCENT};
      color: #fff;
    }
  }
  .img-fluid {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
  }
`;
