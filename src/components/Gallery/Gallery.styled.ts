import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px 32px 32px;
  overflow: hidden scroll;
  height: calc(100vh - 48px);
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 7px;
`;
export const CardPopup = styled.ul`
  position: absolute;
  top: 30px;
  right: 15px;
  list-style: none;
  width: 60px;
  height: 50px;
  z-index: 9999;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  border-radius: 2px;
  padding: 4px 0;
  outline: none;
  color: ${({ theme }) => theme.colors.fontColor};
  :hover {
    background: ${({ theme }) => theme.colors.buttonColor};
  }
`;
export const Menu = styled.li`
  width: 60px;
  height: 25px;
  font-size: 10px;
  padding: 5px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const PopupWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardInner = styled.div`
  flex: 0 1 25%;
  width: 25%;
  position: relative;
`;
