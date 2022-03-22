import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 0 1 25%;
  width: 25%;
  position: relative;
`;

export const Inner = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 9px;
  position: relative;
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
`;

export const CardBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 71%;
`;
export const CardImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const SelectedImage = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundHover};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease 0s;
  &:hover {
    opacity: 1;
  }
`;
export const MenuIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const CardPopup = styled.ul`
  position: absolute;
  top: 30px;
  right: 15px;
  list-style: none;
  width: 60px;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  border-radius: 2px;
  padding: 4px 0;
  outline: none;
  z-index: 9999;
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
