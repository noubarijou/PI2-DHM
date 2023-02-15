import styled, { css, DefaultTheme } from 'styled-components';
import { InputTextProps } from './InputText';

const InputModifiers = {
  outOfFocus: (theme: DefaultTheme) => css`
    border: 1px solid #d2ffec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    &::placeholder: {
      color: ${theme.colors.secondaryBlack};
      font-weight: ${theme.font.bold};
      opacity: 0.5;
    }
  `,
  focusWithin: (theme: DefaultTheme) => css`
    &:focus-within {
      outline: none;
      box-shadow: 0 0 0.5rem ${theme.colors.secondaryBlack};
      font-weight: ${theme.font.normal};
    }
  `,
  validationError: (theme: DefaultTheme) => css`
    border: 1px solid #ee3838;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    font-weight: ${theme.font.bold};
  `
};

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const LabelWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 0.8rem;
    transition: ${theme.transition.default};
  `}
`;

export const InputText = styled.input<InputTextProps>`
  ${({ theme, variant, size }) => css`
    font-family: ${theme.font.family};
    background: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    width: 360px;
    height: 64px;
    min-height: 35px;
    border-radius: 10px;
    padding: 10px;
    @media (max-width: 600px) {
      width: 300px;
      height: 50px;
    }
    ${!!variant && InputModifiers[variant](theme)};
  `}
`;

export const Error = styled.p`
  color: red;
`;
