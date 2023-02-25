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
  `}
`;

export const AvailableMoneyCard = styled.section`
  ${({ theme }) => css`
    position: absolute;
    top: 50px;
    height: 160px;
    width: 350px;
    left: 11px;
    border-radius: 8px;
    background: ${theme.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;

export const whiteText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    height: 16px;
    width: 160px;
    left: 25px;
    top: 52px;
  `}
`;

export const RecentActivity = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    height: 250px;
    width: 350px;
    border-radius: 8px;
    position: relative;
    bottom: 25px;
    row-gap: 5px;
  `}
`;
export const blackText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    height: 16.915555953979492px;
    width: 112.67806243896484px;
    margin-left: 12px;
    padding-top: 3px;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const DividerLine = styled.div`
  height: 2px;
  width: 305.1116943359375px;
  margin-left: 12px;
  margin-bottom: 10px;
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryWhite};
  `};
`;

export const ButtonInputContainer = styled.div`
  bottom: 25px;
  display: grid;
  align-items: center;
  position: relative;
  width: 22rem;
  row-gap: 10px;
`;
