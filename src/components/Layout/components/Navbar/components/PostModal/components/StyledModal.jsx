import { Modal } from 'reactstrap';
import styled from 'styled-components';
import { SECONDARY } from 'constants/colors';

export default styled(Modal)`
  max-width: 600px;
  .modal-content {
    background: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    .avatar {
      border-radius: 50%;
      width: 70px;
      height: 70px;
      margin-right: 20px;
    }
    .box {
      width: 600px;
      border-radius: 5px;
      background: #fff;
      .tabs {
        width: 100%;
        border-bottom: 2px solid #ccc;
        .btn {
          cursor: pointer;
          padding: 0.5rem 20px;
          border: none;
          border-radius: 0;
          &:hover,
          &:focus {
            border: none;
            box-shadow: none;
          }
          &:first-child {
            border-top-left-radius: 5px;
          }
          &.active {
            color: ${SECONDARY};
            padding-bottom: calc(0.5rem - 3px);
            border-bottom: 3px solid ${SECONDARY};
          }
        }
      }
      .box-body {
        padding: 20px;
        .channels {
          border: none;
          background: transparent;
        }
      }
    }
  }
`;
