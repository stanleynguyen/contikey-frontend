import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px 0 #ccc;
  border-radius: 5px;
  .body {
    padding: 20px 0;
    .caption {
      margin-bottom: 20px;
    }
    .preview {
      display: flex;
      max-height: 150px;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
      .photo-container {
        flex: 0 0 150px;
        height: auto;
        background: #fff;
      }
      .detail {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px;
        .title,
        .text,
        .url {
          margin-bottom: 0;
        }
        .url {
          color: #999;
        }
      }
    }
  }
`;
