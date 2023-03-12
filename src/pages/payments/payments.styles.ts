import { TableContainer } from 'components';
import { InputText } from 'components/input/input-text/input-text.styles';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  position: relative;

  > div:first-child,
  div:nth-child(2) {
    padding: 0;
  }

  ${({ theme }) => css`
    ${InputText}.search {
      @media (max-width: ${theme.screen.mobile375w}) {
        padding: 1.25rem 0 1.25rem 2.125rem;
      }

      @media (min-width: ${theme.screen.mobile}) {
        width: 21rem;
      }
      @media (min-width: ${theme.screen.mobile425w}) {
        padding-left: 2.5rem;
      }

      @media (min-width: ${theme.screen.tablet}) {
        width: 32rem;
      }

      @media (min-width: ${theme.screen.desktopXL}) {
        width: 62.875rem;
      }
    }
  `}
`;

export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 1.35rem;
  left: 0.75rem;

  ${({ theme }) => css`
    @media (min-width: ${theme.screen.tablet}) {
      left: 1rem;
    }
  `}
`;
export const PaymentsTable = styled(TableContainer)`
  ${({ theme }) => css``}
`;
export const PaymentsHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.secondaryWhite};
    margin-top: -15px;
    padding-bottom: 5px;
    > p {
      font-weight: ${theme.font.bold};
    }
  `}
`;

export const PaymentsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 0;
    border-bottom: 1px solid ${theme.colors.secondaryWhite};

    &:nth-child(-1) {
      border-top: 1px solid ${theme.colors.secondaryWhite};
    }
  `}
`;

export const Selecionar = styled.button`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.black};
  `}
`;
