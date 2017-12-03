import styled from 'styled-components';
import { PRIMARY } from '../../../constants/colors';

export default styled.div`
  height: calc(100vh - 75px);
  min-height: 400px;
  .container-fluid,
  .row,
  .left-section,
  .right-section,
  .view,
  .spinner-container {
    width: 100%;
    height: 100%;
  }
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left-section {
    .view {
      border-top: none;
      border-left: none;
      border-bottom: none;
    }
  }
  .right-section {
    padding: 20px 0;
    position: relative;
    .caption {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .like-container {
      display: flex;
      align-items: center;
      .like {
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        &.inverted {
          filter: grayscale(100%);
        }
        img {
          height: 30px;
          width: 30px;
        }
      }
      .like-text {
        margin-left: 10px;
      }
    }
    .comment-section {
      max-height: 50vh;
      overflow-y: scroll;
      margin-top: 20px;
      &::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: transparent;
      }
    }
    .widget {
      position: absolute;
      bottom: 0;
      z-index: 2;
      padding: 5px 10px;
      width: calc(100% + 45px);
      margin-left: -15px;
      background: ${PRIMARY};
      .input-group {
        .form-control {
          border-top-left-radius: 9999px;
          border-bottom-left-radius: 9999px;
          border-right: none;
        }
        .btn-secondary {
          height: 40px;
          width: 40px;
          border-top-right-radius: 9999px;
          border-bottom-right-radius: 9999px;
        }
      }
    }
  }
`;
