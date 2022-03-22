import styled from 'styled-components';

export const Info = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0px 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fontGray};
  box-sizing: border-box;
`;

export const Count = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Title = styled.span`
  position: relative;
  text-align: center;
  flex: 1 1 0%;
  font-size: 18px;
  font-weight: 700;
  line-height: 56px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.deepGray};
  user-select: none;
`;

export const SelectGroup = styled.section`
  margin-left: auto;
  text-transform: initial;
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-end;
`;

export const GalleryLeft = styled.div`
  position: relative;
  flex: 1 1 0%;
  margin-right: auto;
  display: block;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const CheckBoxGroup = styled.div`
  margin-top: 5px;
  span {
    font-weight: 12px;
    margin-left: 20px;
  }
  @media (min-width: 768px) {
    margin: auto 5px;
  }
`;
export const Button = styled.button`
  height: 32px;
  padding: 0px 5px;
  margin: 0;
  cursor: pointer;
  display: flex;
  margin-right: 2px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: none;

  :last-child {
    margin-right: 0px;
  }
  img {
    width: 18px;
    height: 18px;
  }
  span {
    word-break: keep-all;
    line-height: 18px;
    float: right;
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.buttonFont};
  }
  @media (min-width: 768px) {
    margin-right: 8px;
    padding: 0px 10px;
    span {
      font-size: 14px;
    }
  }
`;
