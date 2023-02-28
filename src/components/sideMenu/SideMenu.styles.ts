import Link from 'next/link';
import styled, { css, DefaultTheme } from 'styled-components';
import theme from 'styles/theme';

export const NavBar = styled.nav`
  width: 13.75rem;
  height: 100vh;
  //position: relative;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const NavInfo = styled.div`
  height: 8rem;
  width: 100%;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    color: ${theme.colors.primary};
  `}

  @media (min-width: ${theme.screen.tablet}) {
    display: none;
  }
`;

export const MenuHambuger = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;

  > span {
    display: block;
    width: 1.5rem;
    height: 0.125rem;
    background-color: ${theme.colors.primary};
    margin-bottom: 0.25rem;
    border-radius: 0.5rem;
    position: absolute;
    transform-origin: center;
    left: 10rem;
    top: 0.5rem;
  }
  &.is-active {
    > span:nth-child(1) {
      transform: rotate(45deg);
    }

    > span:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

export const InfoText = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.xbold};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const NavLinksContainer = styled.ul`
  padding: 1rem 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};

    > button {
      background: none;
      border: none;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      opacity: 50%;
      text-align: left;
    }
  `}

  > li {
    list-style: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;

  ${({ theme }) => css`
    color: ${theme.colors.black};

    &.active {
      font-weight: ${theme.font.xxbold};
    }
  `};
`;

/* 
const MenuModifiers = {
  emphasis: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
    text-decoration: underline;
  `
};

export const MenuLink = styled.li<>`
  ${({ theme, highlighted }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    text-decoration: none;
  `}
`;
 */
