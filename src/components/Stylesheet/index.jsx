import styled from 'styled-components';
import { PRIMARY, SECONDARY, ACCENT } from '../../constants/colors';

export default styled.div`
  .container,
  .container-fluid {
    min-width: 1200px;
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
  .page-title {
    margin-top: 20px;
  }
  .tabs-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    .tab-btn,
    &:before {
      padding: 10px;
    }
    .tab-btn {
      color: #999;
      text-transform: uppercase;
      font-weight: 600;
      &:hover,
      &:focus {
        color: #999;
        text-decoration: none;
      }
      &.active {
        color: ${SECONDARY};
        border-bottom: 4px solid ${SECONDARY};
        padding-bottom: 6px;
      }
      .count {
        font-weight: normal;
      }
    }
  }
`;
