import styled, { css } from 'styled-components';
import theme from 'styles/theme';

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
    width: 100%;
    border-radius: 8px;
    @media (min-width: ${theme.screen.desktopXL}) {
      height: 390px;
    }
  `}
`;

export const InfoTitle = styled.p`
  ${({ theme }) => css`
    padding: 10px;
    font-weight: ${theme.font.normal};
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
    height: 2px;
    width: 250px;
    margin-left: 10px;
    background-color: ${theme.colors.secondaryWhite};
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 305px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
      width: 360px;
    }
    @media (min-width: ${theme.screen.tablet768w}) {
      width: 550px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
    width: 250px;
    height: 45px;
    @media (min-width: ${theme.screen.mobile375w}) {
      width: 300px;
    }
    @media (min-width: ${theme.screen.mobile425w}) {
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
    width: 180px;
  `}
`;

export const InfoDescription = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    width: 120px;

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
    @media (min-width: ${theme.screen.desktopXL}) {
      bottom: 610px;
      left: 460px;
      width: 1064px;
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
    padding: 5px;
    height: 340px;
    border-radius: 8px;
    background: ${theme.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: ${theme.screen.tablet768w}) {
      width: 728px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 734px;
      height: 350px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      bottom: 25px;
      left: 460px;
      height: 320px;
      width: 1064px;
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
    padding: 25px;
    @media (min-width: ${theme.screen.tablet768w}) {
      font-size: ${theme.font.sizes.medium};
      width: 500px;
      padding: 30px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      font-size: ${theme.font.sizes.medium};
      width: 500px;
      padding: 25px 30px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      font-size: ${theme.font.sizes.large};
      width: 600px;
      padding: 10px 30px 40px 30px;
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
    padding: 25px 25px 10px 25px;
    display: flex;
    justify-content: space-between;
    @media (min-width: ${theme.screen.desktop}) {
      font-size: ${theme.font.sizes.medium};
      padding: 30px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      font-size: ${theme.font.sizes.large};
      padding: 20px 30px 0 30px;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      font-size: ${theme.font.sizes.xxlarge};
      padding: 60px;
    }
  `}
`;
