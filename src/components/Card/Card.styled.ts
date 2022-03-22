import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
