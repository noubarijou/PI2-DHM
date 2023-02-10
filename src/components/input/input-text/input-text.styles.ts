import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
    display: 'flex',
    flexDirection: 'column,
    alignItems: 'flex-start,
`;

export const LabelWrapper = styled.span`
    display: flex,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
`;

export const Label = styled.label`
  ${({ theme }) => css`
    fontSize: ${theme.font.sizes.medium},
    color: ${theme.colors.white},
    `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex,
    border: ${theme.border.radius},
    padding: ${theme.spacings.xxsmall},
    transition: ${theme.transition.default},
    width: '100%',
    minHeight: 35,
    `}
`;

export const InputText = styled.input`
  ${({ theme }) => css`
fontFamily: ${theme.font.family},
background: ${theme.colors.white},
fontSize: ${theme.font.sizes.small}
border: 'none',
width: '100%',
color: ${theme.colors.black},
fontWeight: ${theme.font.bold},
'&::placeholder': {
    color: ${theme.colors.secondaryBlack},
    fontWeight: ${theme.font.normal},
    fontSize: ${theme.font.sizes.small},
    opacity: 0.5,
},
`}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
display: 'flex',
alignItems: 'center,
marginRight: ${theme.spacings.xsmall},
color: ${theme.colors.primary}
`}
`;
