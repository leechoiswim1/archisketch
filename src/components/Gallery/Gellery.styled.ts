import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px 32px 32px;
  overflow: hidden scroll;
  height: calc(100vh - 48px);
`;
export const Info = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0px 12px;
  font-size: 14px;
  color: rgb(153, 153, 153);
`;

export const Count = styled.span`
  flex: 1 1 0%;
  margin-right: auto;
  font-size: 14px;
  color: rgb(102, 102, 102);
  text-transform: lowercase;
`;

export const Title = styled.span`
  position: relative;
  text-align: center;
  flex: 1 1 0%;
  font-size: 18px;
  font-weight: 700;
  line-height: 56px;
  text-transform: capitalize;
  color: rgb(45, 50, 54);
  user-select: none;
`;

export const SelectGroup = styled.section`
  margin-left: auto;
  text-transform: initial;
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-end;
`;

export const SelectWrap = styled.div`
  margin-left: 8px;
  width: 134px;
`;
export const Select = styled.select`
  position: relative;
  background-color: #fff;
  border: 1px solid #d9e7e9;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  height: 32px;
  padding: 0 11px;
`;
