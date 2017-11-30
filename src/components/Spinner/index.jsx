import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  display: flex;
  justify-content: center;

  .btn {
    align-items: center;
    background: #93e2cb;
    border-radius: 4px;
    display: flex;
    height: 40px;
    justify-content: center;
    padding: 1rem;
    width: 160px;
  }

  svg#loader-pencil {
    fill: #3a846e;
    width: 80px;
  }

  #line {
    animation: linePencil 0.8s infinite linear;
  }

  @-webkit-keyframes linePencil {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-150px);
    }
  }

  @keyframes linePencil {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-150px);
    }
  }
`;

const Spinner = () => (
  <StyleWrapper>
    <div className="btn">
      <svg
        id="loader-pencil"
        xmlns="http://www.w3.org/2000/svg"
        width="667"
        height="182"
        viewBox="0 0 677.34762 182.15429"
      >
        <g>
          <path
            id="body-pencil"
            d="M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z"
          />
          <path
            id="line"
            d="M134.482 157.147v25l518.57.008.002-25-518.572-.008z"
          />
        </g>
      </svg>
    </div>
  </StyleWrapper>
);

export default Spinner;
