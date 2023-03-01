import styled, { css } from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: calc(10vh - 7px);
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.primary};
  `}

  .headerLogo {
    height: 70%;
    > img {
      height: 100%;
      width: auto;
    }
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  align-items: center;

  > .alias {
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;

    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.xbold};
    `}
  }
`;

export const NavBar = styled.nav`
  width: 13.75rem;
  height: ${({ theme }) => theme.calc.body};
  position: absolute;
  top: calc(10vh - 7px);
  z-index: 1;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};

    @media (min-width: ${theme.screen.desktopXL}) {
      width: 17.25rem;
    }
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
`;

export const HambugerMenu = styled.div`
  cursor: pointer;

  > span {
    display: block;
    width: 1.5rem;
    height: 0.25rem;
    border-radius: 0.5rem;

    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
    `}
  }

  &.openBtn {
    > span {
      width: 2rem;
    }
    > span:nth-child(2) {
      margin: 0.375rem 0;
    }
  }

  &.closeBtn {
    width: 2rem;
    height: 2rem;
    position: relative;
    left: 10rem;

    > span {
      position: absolute;
      top: 0.75rem;
      transform-origin: center;
    }

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
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.medium};

    &.headerText {
      color: ${theme.colors.white};
    }
  `}
`;
