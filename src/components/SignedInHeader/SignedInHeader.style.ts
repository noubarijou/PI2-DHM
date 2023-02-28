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
      color: #c1fd35;
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
