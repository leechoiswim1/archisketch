import styled, { keyframes } from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Spin = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const dot1 = keyframes`   
    0%, 100% {transform: translate(7.5px, 7.5px); opacity:1} 
    25% {transform: translate(37.5px, 7.5px); opacity:0.5} 
    50% {transform: translate(37.5px, 37.5px);opacity:0.5} 
    75% {transform: translate(7.5px, 37.5px );opacity:0.5} 
`;

const dot2 = keyframes` 
    0%, 100% {transform: translate(37.5px, 7.5px); opacity:0.5} 
    25% {transform: translate(37.5px, 37.5px); opacity:1}  
    50% {transform: translate(7.5px, 37.5px);opacity:0.5} 
    75% {transform: translate(7.5px, 7.5px);opacity:0.5} 
`;

const dot3 = keyframes`  
    0%, 100% {transform: translate(37.5px, 37.5px);opacity:0.5} 
    25% {transform: translate(7.5px, 37.5px); opacity:0.5}  
    50% {transform: translate(7.5px, 7.5px);opacity:1} 
    75% {transform: translate(37.5px, 7.5px);opacity:0.5} 
`;

const dot4 = keyframes` 
    0%, 100% {transform: translate(7.5px, 37.5px); opacity:0.5} 
    25% {transform: translate(7.5px, 7.5px); opacity:0.5} 
    50% {transform: translate(37.5px, 7.5px); opacity:0.5} 
    75% {transform: translate(37.5px, 37.5px); opacity:1} 
`;

export const Dot = styled.div`
  background: ${({ theme }) => theme.colors.blue};
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  :nth-child(1) {
    animation: ${dot1} 10s linear infinite;
  }
  :nth-child(2) {
    animation: ${dot2} 10s linear infinite;
  }
  :nth-child(3) {
    animation: ${dot3} 10s linear infinite;
  }
  :nth-child(4) {
    animation: ${dot4} 10s linear infinite;
  }
`;
