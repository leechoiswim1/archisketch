import styled, { keyframes } from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Spin = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const dot1 = keyframes`   
    0%, 100% {transform: translate(0, 0); opacity:1} 
    25% {transform: translate(0, 15px); opacity:0.5} 
    50% {transform: translate(15px, 15px);opacity:0.5} 
    75% {transform: translate(15px, 0);opacity:0.5} 
`;

const dot2 = keyframes` 
    0%, 100% {transform: translate(15px, 0px); opacity:0.5} 
    25% {transform: translate(0px,0px); opacity:1}  
    50% {transform: translate(0px,15px);opacity:0.5} 
    75% {transform: translate(15px, 15px);opacity:0.5} 
`;

const dot3 = keyframes`  
    0%, 100% {transform: translate(15px, 15px);opacity:0.5} 
    25% {transform: translate(15px,0px ); opacity:0.5}  
    50% {transform: translate(0, 0);opacity:1} 
    75% {transform: translate(0px, 15px);opacity:0.5} 
`;

const dot4 = keyframes` 
    0%, 100% {transform: translate(0px, 15px); opacity:0.5} 
    25% {transform: translate(15px, 15px); opacity:0.5} 
    50% {transform: translate(15px, 0px); opacity:0.5} 
    75% {transform: translate(0, 0); opacity:1} 
`;

export const Dot = styled.div`
  background: ${({ theme }) => theme.colors.blue};
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  :nth-child(1) {
    top: 0;
    left: 0;
    z-index: 1;
    animation: ${dot1} 1.8s linear infinite;
  }
  :nth-child(2) {
    top: 0;
    right: 0;
    animation: ${dot2} 1.8s linear infinite;
  }
  :nth-child(3) {
    bottom: 0;
    right: 0;
    z-index: 1;
    animation: ${dot3} 1.8s linear infinite;
  }
  :nth-child(4) {
    bottom: 0;
    left: 0;
    animation: ${dot4} 1.8s linear infinite;
  }
`;
