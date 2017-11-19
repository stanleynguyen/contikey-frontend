import styled from 'styled-components';
import { SECONDARY } from '../../constants/colors';

export default styled.div`
  #content {
    padding-top: 75px;
  }
  .btn-secondary {
    background-color: ${SECONDARY};
    border-color: ${SECONDARY};
    color: #fff;
  }
  .img-fluid {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
  }
`;
