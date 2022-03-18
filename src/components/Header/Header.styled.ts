import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100vw;
  min-width: 1024px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  height: 32px;
  padding: 0px 10px;
  border: none;
  border-radius: 4px;
  margin: 0;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;
