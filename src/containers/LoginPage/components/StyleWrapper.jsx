import styled from 'styled-components';
import kidPic from 'assets/kid.jpeg';
import { ModalBody } from 'reactstrap';
import { ACCENT } from 'constants/colors';

export const StyledModalBody = styled(ModalBody)`
  .btn-invisible {
    cursor: pointer;
    margin-top: 15px;
    background: transparent;
    border: none;
    color: ${ACCENT};
    &:hover {
      background: ${ACCENT};
      color: #fff;
    }
  }
`;

export default styled.div`
  width: 100%;
  height: ${({ insideModal }) => (insideModal ? '100%' : '100vh')};
  background: ${({ insideModal }) =>
    insideModal ? '#fff' : `url(${kidPic}) no-repeat center center`};
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .header {
    padding: 20px;
    display: flex;
    align-items: center;

    .logo {
      width: 100px;
      height: 100px;
      margin-right: 20px;
    }
    .tagline {
      .title,
      .subtitle {
        margin-bottom: 0;
      }
    }
  }
  .tags-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    .tags-container {
      display: flex;
      max-width: 400px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .btn-invisible {
      cursor: pointer;
      margin-top: 15px;
    }
  }
`;
