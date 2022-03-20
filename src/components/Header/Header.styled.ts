import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  align-items: center;
`;
export const HeaderLeft = styled.div`
  margin-left: 16px;
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
  display: flex;
  margin-right: 8px;
  align-items: center;
  :last-child {
    margin-right: 0px;
  }
  img {
    width: 18px;
    height: 18px;
  }
  span {
    line-height: 18px;
    float: right;
    font-size: 14px;
    font-weight: 500;
    color: rgb(75, 75, 75);
    margin-left: 8px;
  }
`;

export const HeaderRight = styled.div`
  margin-right: 10px;
  color: rgb(75, 75, 75);
  font-weight: 700;
  display: flex;
  align-items: center;
`;
