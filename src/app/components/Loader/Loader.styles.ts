import styled from "styled-components";

export const Container = styled.div`
background: #263038;
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
z-index: 1051;
.loader {
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #FF3D00;
    position: relative;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: #fff;
    transform: rotate(0deg) translate(30px);
    animation: rotate 1s ease infinite;
  }
  .loader:after {
    animation-delay: 0.5s
  }
  @keyframes rotate {
    100% {transform: rotate(360deg) translate(30px)
  }
      
`;
