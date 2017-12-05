import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 0 0 15px 0 #ccc;
  margin-bottom: 20px;
  border-radius: 5px;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .btn {
    width: auto;
    align-self: center;
    text-transform: capitalize;
    &.btn-secondary,
    &.btn-faded {
      padding: 4px 7px;
    }
  }
`;
