import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

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
    border: 0.8rem;
    transition: ${theme.transition.default};
  `}
`;

export const InputText = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    background: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    width: 360px;
    height: 64px;
    min-height: 35px;
    border: 1px solid #d2ffec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    &::placeholder: {
      color: ${theme.colors.secondaryBlack};
      font-weight: ${theme.font.normal};
      font-wize: ${theme.font.sizes.small};
      opacity: 0.5;
    }
    &:focus-within {
      outline: none;
      box-shadow: 0 0 0.5rem ${theme.colors.secondaryBlack};
    }
    @media (max-width: 600px) {
      width: 300px;
      height: 50px;
    }
  `}
`;
