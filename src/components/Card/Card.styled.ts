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
  background-color: rgba(75, 79, 84, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s ease 0s;
  &:hover {
    opacity: 1;
  }
`;
