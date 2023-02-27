import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const ContainerPage = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryWhite};
    height: 81.5vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  `}
`;
export const PageTitle = styled.div`
  display: flex;
  position: absolute;
  left: 3.28%;
  top: 2%;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const PageTitleContent = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
  position: relative;
  left: 5px;
  bottom: 2px;
`;

export const AvailableMoneyCard = styled.section`
  ${({ theme }) => css`
    position: absolute;
    top: 43px;
    height: 160px;
    width: 295px;
    left: 5px;
    border-radius: 8px;
    background: ${theme.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 350px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 400px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      left: 330px;
      top: 20px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 63%;
      left: 360px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      top: 50px;
      left: 460px;
      height: 230px;
    }
  `}
`;
export const AvailableMoney = styled.div`
  ${({ theme }) => css`
    width: 180px;
    height: 50px;
    position: absolute;
    top: 88px;
    left: 15px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 100px;
    @media (min-width: ${theme.screen.desktopXL}) {
      border: 3px solid ${theme.colors.primary};
      top: 130px;
      left: 20px;
      height: 60px;
      width: 220px;
    }
  `}
`;
export const Balance = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-left: 20px;
    margin-top: 10px;
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const whiteText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    height: 16px;
    width: 260px;
    left: 25px;
    top: 60px;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    @media (min-width: ${theme.screen.desktopXL}) {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      top: 90px;
    }
  `}
`;
export const TopLinks = styled.div`
  display: flex;
  position: absolute;
  bottom: 25px;
  justify-content: flex-end;
  top: 10px;
  right: 10px;
`;
export const Links = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    height: 16px;
    width: 160px;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    padding-left: 10px;
    text-decoration: none;
    @media (min-width: ${theme.screen.desktopXL}) {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      right: 25px;
      top: 10px;
    }
  `}
`;
export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    bottom: 360px;
    display: grid;
    align-items: center;
    position: absolute;
    width: 18.438rem;
    row-gap: 10px;
    left: 5px;
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 350px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 400px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      left: 330px;
      bottom: 380px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 63%;
      left: 360px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      bottom: 500px;
      left: 460px;
      display: flex;
      justify-content: space-between;
      width: 63%;
      height: 106px;
    }
  `}
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: 290px;
  left: -8px;
  max-width: 295px;
  @media (min-width: ${theme.screen.tablet768w}) {
    left: 316px;
  }
  @media (min-width: ${theme.screen.desktop}) {
    width: 100%;
    left: 348px;
  }
  @media (min-width: ${theme.screen.desktopXL}) {
    width: 100%;
    left: 448px;
    bottom: 390px;
  }
`;

export const RecentActivity = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    height: 270px;
    width: 295px;
    border-radius: 8px;
    position: absolute;
    bottom: 22px;
    left: 5px;
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 350px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 400px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      left: 330px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 63%;
      left: 360px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      width: 63%;
      left: 460px;
      height: 350px;
    }
  `}
`;

export const ActivityTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    height: 16.915555953979492px;
    width: 112.67806243896484px;
    position: absolute;
    left: 13px;
    top: 11px;
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.small};
  `}
`;
export const DividerLine = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 40px;
    left: 10px;
    height: 2px;
    width: 280px;
    background-color: ${theme.colors.secondaryWhite};
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 330px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 380px;
    }
    @media (max-width: ${theme.screen.desktop}) {
      width: 610px;
    }
    @media (max-width: ${theme.screen.desktopXL}) {
      width: 860px;
    }
  `};
`;

export const ActivityContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    top: 50px;
    left: 11px;
    width: 285px;
    min-height: 45px;
    max-height: 45px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.secondaryWhite};
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 330px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 380px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 96%;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      max-height: 90px;
      height: 60px;
    }
  `}
`;

export const ActivityDescription = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    right: 40px;
    width: 110px;
    position: relative;
    @media (min-width: ${theme.screen.mobile375w}) {
      right: 60px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      right: 85px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      right: 160px;
      display: flex;
      flex-wrap: nowrap;
      width: 200px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      right: 280px;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const ActivityValue = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    right: 5px;
    width: 60px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: ${theme.screen.desktopXL}) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const LinkFullActivity = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    max-height: 45px;
    position: absolute;
    width: 95%;
    top: 240px;
    right: 280px;
    @media (min-width: ${theme.screen.desktopXL}) {
      top: 310px;
      right: 50px;
    }
  `}
`;

export const FullActivityText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.xbold};
    display: flex;
    position: absolute;
    left: 3.28%;
    top: 2%;
    @media (min-width: ${theme.screen.desktopXL}) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
