import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 0 1 25%;
  width: 25%;
  position: relative;
`;

export const Inner = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 9px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  box-shadow: none;
  transition: box-shadow 0.25s ease 0s;
`;

export const CardBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: 4px;
  transition: box-shadow 0.25s ease 0s;
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
