import styled, { css } from 'styled-components';
import {
  ModifierSizeMediaQuery,
  ModifierSizeMediaQueryProps
} from 'styles/modifier.style';

export const addNewCardContainer = styled.div<ModifierSizeMediaQueryProps>`
  ${({ theme, variant }) => css`
    height: 9.25rem;
    border-radius: 0.5rem;
    padding: 1.25rem;
    font-weight: ${theme.font.xbold};
    background-color: ${theme.colors.secondaryBlack};

    ${ModifierSizeMediaQuery[(variant = 'bigComponent')](theme)};

    @media (min-width: ${theme.screen.tablet}) {
      height: 9.75rem;
      padding: 2.5rem;
    }

    @media (min-width: ${theme.screen.tablet}) {
      height: 10.5rem;
    }
  `}
`;

export const callActionNewCard = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export const btnNewCard = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};

    @media (min-width: ${theme.screen.tablet}) {
      margin-top: 2rem;
    }
  `}

  > p {
    width: 65%;

    ${({ theme }) => css`
      @media (min-width: ${theme.screen.tablet}) {
        width: 80%;
      }

      @media (min-width: ${theme.screen.desktopXL}) {
        width: 90%;
      }
    `}
  }
`;

export const ContainerBackGround = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.675rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
