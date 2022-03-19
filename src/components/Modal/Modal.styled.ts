import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
`;

export const ModalDetail = styled.div`
  position: relative;
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
`;
export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translate(0px, -50%);
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background: rgb(243, 244, 244);
  transition: all 0.32s ease 0s;
  cursor: pointer;
`;
export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translate(0px, -50%);
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background: rgb(243, 244, 244);
  transition: all 0.32s ease 0s;
  cursor: pointer;
`;
export const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: rgb(250, 250, 250);
`;
