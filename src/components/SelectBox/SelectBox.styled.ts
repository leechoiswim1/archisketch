import styled from 'styled-components';

export const SelectInner = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  height: 32px;
  padding: 0 3px;
  font-size: 12px;
  :focus-within {
    img {
      transform: rotate(180deg);
    }
  }
  @media (min-width: 768px) {
    font-size: 14px;
    padding: 0 11px;
  }
`;

export const Select = styled.select`
  width: inherit;
  height: inherit;
  background: transparent;
  border: 0 none;
  outline: 0 none;
  padding: 0 5px;
  position: relative;
  z-index: 3;
  appearance: none;
  color: ${({ theme }) => theme.colors.selectGray};
  cursor: pointer;
`;

export const ArrowIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 20px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
    transition: 0.3s;
  }
  @media (min-width: 768px) {
    width: 35px;
  }
`;
export const SelectWrap = styled.div`
  margin-left: 8px;
  width: 50%;
  min-width: 80px;
  @media (min-width: 768px) {
    width: 134px;
  }
`;
