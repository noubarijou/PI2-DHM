import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const ContainerPage = styled.div`
  background-color: ${theme.colors.primary};
  height: calc(10vh - 7px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    padding: 20px;
    height: 100%;
  }
`;

export const ButtonLogin = styled.button`
  border: 2px solid ${theme.colors.primary};
  height: 100%;
  padding: 10px;
  line-height: 0.6em;
  border-radius: 5px;
  margin-right: 15px;
  background-color: transparent;
  cursor: pointer;

  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-weight: ${theme.font.xbold};
    color: ${theme.colors.primary};
  `};
`;

export const UserInitials = styled.div`
  background-color: ${theme.colors.black};
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
    ${({ theme }) => css`
      color: ${theme.colors.primary};
    `};
    font-size: 120%;
    font-weight: 600;
  }
`;

export const UserGreetings = styled.p`
  color: ${theme.colors.black};
  font-size: 1em;
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
