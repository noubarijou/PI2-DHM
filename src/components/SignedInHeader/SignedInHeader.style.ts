import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const ContainerPage = styled.div`
  background-color: ${theme.colors.black};
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  position: sticky;

  .dmh-container {
    margin-left: 20px;
    display: inline-block;
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.primary};
    `}
  }

  .buttons-container {
    display: flex;
    align-items: center;
    padding: 12px;
    height: 100%;
  }

  .greeting-text {
    color: white;
  }
`;

export const ButtonProfile = styled.button`
  ${({ theme }) => css`
    height: 40px;
    width: 43px;
    padding: 6px;
    line-height: 0.6em;
    border: 2px solid ${theme.colors.primary};
    border-radius: 12px;
    margin-right: 15px;
    cursor: pointer;
    font-size: 20px;
    background-color: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.xbold};
    color: ${theme.colors.black};
  `};
`;

export const UserInitials = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  border-radius: 13px;
  margin-right: 10px;
  padding: 5px;
  width: 40px;
  height: 40px;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  p {
    color: black;
    font-size: 120%;
    font-weight: 600;
  }
`;

export const UserGreetings = styled.p`
  font-size: 1em;
  color: ${theme.colors.primary};
  font-weight: 600;
`;

export const UserContainer = styled.div`
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;
