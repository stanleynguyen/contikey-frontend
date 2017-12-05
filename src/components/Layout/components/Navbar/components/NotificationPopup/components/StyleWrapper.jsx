import styled from 'styled-components';
import { SECONDARY } from '../../../../../../../constants/colors';

export default styled.div`
  position: absolute;
  margin-left: -25vw;
  margin-top: 55px;
  background: #fff;
  border: 1px solid #999;
  border-radius: 5px;
  width: 35vw;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  background: #fff;
  .header {
    padding: 10px 15px;
    text-align: center;
    border-bottom: 1px solid #999;
    .badge {
      position: relative;
      background: ${SECONDARY};
      border-radius: 9999px;
      font-size: 1rem;
    }
  }
  .body {
    max-width: 100%;
    min-height: 200px;
    height: 50vh;
    overflow-y: scroll;
  }
  &:after,
  &:before {
    bottom: 100%;
    left: calc(35vw - 115px);
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 30px;
    margin-left: -30px;
  }
  &:before {
    border-color: rgba(153, 153, 153, 0);
    border-bottom-color: #999;
    border-width: 31px;
    margin-left: -31px;
  }
`;
