import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  background-color: #3a393e;
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
      color: #c1fd35;
    `}
  }

  .buttons-container {
    display: flex;
    align-items: center;
    padding: 12px;
    height: 100%;
  }
`;

export const ButtonLogin = styled.button`
  //height: 100%;
  padding: 10px;
  line-height: 0.6em;
  border: 2px solid #c1fd35;
  border-radius: 5px;
  margin-right: 15px;
  background-color: transparent;
  cursor: pointer;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-weight: ${theme.font.xbold};
    color: #c1fd35;
  `};
`;

export const ButtonCreateAccount = styled.button`
  //height: 100%;
  padding: 10px;
  line-height: 0.6em;
  border: 2px solid #c1fd35;
  border-radius: 5px;
  background-color: #c1fd35;
  cursor: pointer;
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-weight: ${theme.font.xbold};
    color: #201f22;
  `};
`;
