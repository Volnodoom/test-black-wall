import styled from 'styled-components';
import { ButtonProps } from 'types/style.type';

const Button = styled.button<ButtonProps>`
  display: block;
  text-align:  center;

  margin: 0;
  padding: ${({ $padding }) => $padding || '12px 32px'};

  font-family: inherit;
  font-size: ${({ $size, theme}) => $size || theme.font.small};
  line-height: 17px;
  font-weight: 700;

  color: ${({ $color, theme }) => $color || theme.color.whiteImpure};
  background-color: ${({ $back }) =>  $back || 'transparent'};
  border: ${({ $border }) => $border || 'none'};
  border-radius: ${({ $radius }) => $radius || 0 };
  cursor: pointer;

  /* &:focus,
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  } */
`;

export default Button;
