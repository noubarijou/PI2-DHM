import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const ContainerPage = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryWhite};
    height: 81.5vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    overflow: hidden;
    @media (min-width: 768px) {
      height: 83vh;
    }
    @media (min-width: 1024px) {
      height: 85.8vh;
    }
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
    width: 350px;
    left: 11px;
    border-radius: 8px;
    background: ${theme.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (min-width: 768px) {
      left: 350px;
    }
    @media (min-width: 1024px) {
      width: 70%;
      left: 360px;
    }
  `}
`;
export const AvailableMoney = styled.div`
  ${({ theme }) => css`
    width: 207px;
    height: 53px;
    position: absolute;
    top: 88px;
    left: 15px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 100px;
  `}
`;
export const Balance = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-left: 30px;
    margin-top: 13px;
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const whiteText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    height: 16px;
    width: 160px;
    left: 25px;
    top: 60px;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
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
export const Links = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    height: 16px;
    width: 160px;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    padding-left: 10px;
    text-decoration: none;
  `}
`;

export const RecentActivity = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    height: 270px;
    width: 350px;
    border-radius: 8px;
    position: absolute;
    bottom: 22px;
    @media (min-width: 768px) {
      left: 350px;
      bottom: 120px;
    }
    @media (min-width: 1024px) {
      width: 70%;
      left: 360px;
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

export const ActivityContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    top: 50px;
    left: 11px;
    width: 320px;
    min-height: 45px;
    max-height: 45px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.secondaryWhite};
    @media (min-width: 1024px) {
      width: 96%;
    }
  `}
`;

export const ActivityDescription = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    right: 55px;
    width: 110px;
    position: relative;
    @media (min-width: 1024px) {
      right: 280px;
      display: flex;
      flex-wrap: nowrap;
      width: 200px;
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
  `}
`;

export const DividerLine = styled.div`
  position: absolute;
  top: 40px;
  left: 10px;
  height: 2px;
  width: 320px;
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryWhite};
  `};
`;

export const ButtonContainer = styled.div`
  bottom: 365px;
  display: grid;
  align-items: center;
  position: absolute;
  width: 22rem;
  row-gap: 10px;
  @media (min-width: 768px) {
    left: 350px;
    bottom: 520px;
  }
  @media (min-width: 1024px) {
    width: 70%;
    left: 360px;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: 290px;
  @media (min-width: 768px) {
    left: 335px;
    bottom: 410px;
  }
  @media (min-width: 1024px) {
    width: 70%;
    left: 360px;
  }
`;

export const LinkFullActivity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-height: 45px;
  position: absolute;
  width: 95%;
  top: 240px;
`;

export const FullActivityText = styled.p`
  display: flex;
  position: absolute;
  left: 3.28%;
  top: 2%;
`;
