import styled from 'styled-components';

import { SECONDARY } from 'constants/colors';

export default styled.form`
  .form-control {
    margin-bottom: 10px;
    border: none;
    border-radius: 0;
    padding-left: 0;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    .btn-invi,
    .btn-secondary {
      cursor: pointer;
      text-transform: uppercase;
    }
    .btn-invi {
      border: none;
      background: transparent;
      color: #999;
    }
    .btn-secondary {
      color: #fff;
      border-color: ${SECONDARY};
      background: ${SECONDARY};
    }
  }
`;
