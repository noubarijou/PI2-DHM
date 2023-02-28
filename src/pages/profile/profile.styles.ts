import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const ContainerPage = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryWhite};
    height: 81.5vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    @media (min-width: ${theme.screen.desktop}) {
      height: 83.6vh;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      height: 84vh;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      height: 87vh;
    }
  `}
`;
export const PageTitle = styled.div`
  display: flex;
  position: absolute;
  left: 3.28%;
  top: 2%;
  @media (min-width: ${theme.screen.tablet768w}) {
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

export const PersonalInfo = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    height: 310px;
    width: 270px;
    border-radius: 8px;
    position: absolute;
    top: 45px;
    left: 15px;
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 330px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 380px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      left: 300px;
      width: 420px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 63%;
      left: 360px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      width: 63%;
      left: 460px;
      height: 380px;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      width: 63%;
      left: 800px;
      height: 700px;
      top: 100px;
    }
  `}
`;

export const InfoTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    height: 16.915555953979492px;
    width: 112.67806243896484px;
    position: absolute;
    left: 13px;
    top: 11px;
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.small};
    @media (min-width: ${theme.screen.desktop}) {
      font-size: ${theme.font.sizes.large};
      width: 300px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      font-weight: ${theme.font.xbold};
      font-size: ${theme.font.sizes.xlarge};
      width: 300px;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      font-weight: ${theme.font.xbold};
      font-size: ${theme.font.sizes.xxlarge};
      width: 300px;
    }
  `}
`;
export const DividerLine = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 40px;
    left: 10px;
    height: 2px;
    width: 240px;
    background-color: ${theme.colors.secondaryWhite};
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 305px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 360px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      width: 400px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 610px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      width: 860px;
      top: 47px;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      width: 1570px;
      top: 75px;
    }
  `};
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    top: 50px;
    left: 11px;
    width: 240px;
    height: 50px;
    border-bottom: 1px solid ${theme.colors.secondaryWhite};
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 300px;
      left: 13px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 390px;
      left: -25px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      width: 400px;
      left: 15px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 96%;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      height: 60px;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      height: 110px;
      top: 90px;
    }
  `}
`;
export const InfoDescriptionContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    right: 42px;
    width: 180px;
  `}
`;

export const InfoDescription = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    width: 120px;
    position: relative;

    @media (min-width: ${theme.screen.mobile375w}) {
      right: 60px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      right: 115px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      right: 160px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      right: 370px;
      display: flex;
      flex-wrap: nowrap;
      width: 200px;
      font-size: ${theme.font.sizes.medium};
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      right: 620px;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      right: 1290px;
      font-size: ${theme.font.sizes.xlarge};
      width: 500px;
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    bottom: 265px;
    position: absolute;
    width: 270px;
    left: 15px;
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 330px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 380px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      width: 420px;
      left: 300px;
      bottom: 260px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 63%;
      left: 360px;
      bottom: 470px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      bottom: 610px;
      left: 460px;
      width: 63%;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      bottom: 1080px;
      left: 800px;
      width: 1602.72px;
      height: 120px;
    }
  `}
`;

export const CVUAliasCard = styled.section`
  ${({ theme }) => css`
    position: absolute;
    bottom: 13px;
    height: 240px;
    width: 270px;
    left: 15px;
    border-radius: 8px;
    background: ${theme.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 330px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 380px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      width: 420px;
      left: 300px;
      bottom: 10px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 63%;
      left: 360px;
      bottom: 30px;
      height: 400px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      bottom: 25px;
      left: 460px;
      height: 500px;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      left: 800px;
      height: 800px;
      bottom: 170px;
    }
  `}
`;

export const CVUAliasText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryWhite};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    height: 14px;
    width: 280px;
    left: 44px;
    top: 632px;
    padding: 15px;
    @media (min-width: ${theme.screen.desktop}) {
      font-size: ${theme.font.sizes.medium};
      width: 500px;
      padding: 30px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      font-size: ${theme.font.sizes.large};
      width: 800px;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      width: 1400px;
      padding: 60px;
    }
  `}
`;

export const CVUAliasTop = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    padding: 15px;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    margin-bottom: -20px;
    @media (min-width: ${theme.screen.desktop}) {
      font-size: ${theme.font.sizes.medium};
      padding: 30px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      font-size: ${theme.font.sizes.large};
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      font-size: ${theme.font.sizes.xxlarge};
      padding: 60px;
    }
  `}
`;
