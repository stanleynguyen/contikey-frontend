import styled from 'styled-components';

export default styled.div`
  box-shadow: 0 0 15px 0 #ccc;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  .photo-container {
    flex: 0 0 50px;
    height: 50px;
    .photo {
      border-radius: 50%;
    }
  }
  .info-container {
    font-size: 0.8rem;
    padding: 0 0 0 10px;
    flex-basis: 100%;
    .header {
      display: flex;
      height: 50px;
      align-items: center;
      justify-content: space-between;
      .info {
        .title,
        .extra {
          margin-bottom: 0;
        }
        .extra {
          color: #999;
        }
      }
      .btn {
        height: 20px;
        padding: 0 10px;
        text-transform: uppercase;
        font-size: 0.7rem;
      }
    }
  }
`;
