import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 0 0 15px 0 #ccc;
  margin-bottom: 20px;
  border-radius: 5px;
  .info {
    display: flex;
    align-items: center;
    height: 90px;
    .avatar {
      margin-right: 30px;
    }
    .details {
      h4,
      p {
        margin-bottom: 0;
      }
      .title {
        font-weight: 300;
      }
      .extra {
        color: #999;
      }
    }
  }
  .btn {
    width: auto;
    align-self: center;
  }
`;
