import styled, { css } from 'styled-components';
import {
  linkBgColor,
  linkBgColorHover,
  linkTextColor,
  linkTextColorHover,
  linkTextSize,
} from 'components/base/theme';

const buttonMixin = css`
  padding: 1em;
  margin: 1em;
  min-width: 200px;
  min-height: 20px;
  text-align: center;

  border: none;
  border-radius: 3px;
  background-color: ${({ bgColor }) => bgColor || linkBgColor};
  color: ${({ color }) => color || linkTextColor};
  font-size: ${({ fontSize }) => fontSize || linkTextSize};
  cursor: pointer;

  &:focus {
    transition: none;
  }

  &:hover {
    background-color: ${({ bgColor, bgColorHover }) => bgColorHover || bgColor || linkBgColorHover};
    color: ${({ colorHover }) => colorHover || linkTextColorHover};
  }
`;

export const StyledButton = styled.button`
  ${buttonMixin}
`;

export const StyledLink = styled.a`
  ${buttonMixin}
`;
