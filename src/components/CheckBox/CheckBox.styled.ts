import styled from 'styled-components/macro';
import { checkSign } from 'assets/icons';

export const CheckBox = styled.input<{ checked: boolean }>`
  position: absolute;
  width: 15px;
  height: 15px;
  left: 15px;
  top: 15px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: inherit;
    height: inherit;
    border: 2px solid
      ${props => (props.checked ? props.theme.colors.blue : props.theme.colors.gray)};
    border-radius: 2px;
    background-color: ${props =>
      props.checked ? props.theme.colors.blue : props.theme.colors.white};
    background-image: url(${checkSign});
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
