import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from './Button';

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.gray};
      border-color: ${theme.colors.gray};
      color: ${theme.colors.primary};
    }

    > a {
      color: ${theme.colors.black};
      text-decoration: none;

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondaryBlack};
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.black};
    }

    > a {
      color: ${theme.colors.primary};
      text-decoration: none;

      &:hover {
        color: ${theme.colors.black};
      }
    }
  `,
  tertiary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondaryGray};
    border: ${theme.colors.secondaryGray};
    &:hover {
      background-color: ${theme.colors.secondaryGray};
      opacity: 0.5;
    }
    > a {
      color: ${theme.colors.black};
      text-decoration: none;
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondaryWhite};
    color: ${theme.colors.black};
    opacity: 0.5;
    border: ${theme.colors.secondaryGray};
    &:hover {
      cursor: not-allowed;
    }
    > a {
      color: ${theme.colors.black};
      text-decoration: none;
    }
  `
};

// #xsmall btn only have a padding
// #medium btn is responsive
// #large btn have a width 496px

const buttonSize = {
  xsmall: () => css`
    padding: 0.625rem 1.25rem;
  `,
  medium: (theme: DefaultTheme) => css`
    width: 18.5rem;
    padding: 1.25rem 0.875rem;

    @media (min-width: ${theme.screen.tablet}) {
      width: 22.5rem;
    }
  `,
  large: (theme: DefaultTheme) => css`
    padding: 1.25rem;
    width: 18.5rem;

    @media (min-width: ${theme.screen.mobile}) {
      width: 21rem;
    }

    @media (min-width: ${theme.screen.tablet}) {
      width: 32rem;
      padding: 2.5rem 1.25rem;
    }

    @media (min-width: ${theme.screen.desktopXL}) {
      width: 31rem;
      padding: 2.5rem 1.25rem;
    }
  `,
  wallet: (theme: DefaultTheme) => css`
    // width: 18.438rem;
    /* width: 100%;
    height: 3.125rem;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 10px;
    text-decoration: none;
    @media (min-width: ${theme.screen.desktop}) {
      min-width: 430px;
      max-width: 898px;
      min-height: 70px;
      font-size: ${theme.font.sizes.large};
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      max-width: 1603px;
      min-height: 130px;
      font-size: ${theme.font.sizes.xxlarge};
      padding: 0 30px;
    } */
  `
};

export const ButtonWrapper = styled.button<ButtonProps>`
  ${({ theme, variant, size }) => css`
    border-radius: 0.625rem;
    border: 1px solid;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.xbold};

    &:hover {
      cursor: pointer;
    }

    ${!!variant && buttonModifiers[variant](theme)};
    ${!!size && buttonSize[size](theme)};
  `}
`;
