import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 3000;
`;
