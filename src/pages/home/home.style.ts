import styled, { css } from 'styled-components';

export const WomanImage = styled.img`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: absolute;
  z-index: -10;
  ${({ theme }) => css`
    object-fit: cover;
    object-position: 53% -90%;
  `};
`;

export const ContainerPage = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  ${({ theme }) => css`
    overflow: hidden;
  `};

  .infos-container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    height: 42%;
  }
`;

export const GreenBottomContainer = styled.div`
  height: 25%;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -10;
  ${({ theme }) => css`
    background-color: #c1fd35;
    border-radius: 30px 30px 0 0;
  `};
`;

export const InfosLeft = styled.div`
  height: 90%;
  width: 50%;
  ${({ theme }) => css`
    margin-right: 10px;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 30px 20px 20px 20px;
  `};

  h2 {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      line-height: 1em;
    `};
    font-size: 1.6em;
  }

  h3 {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
    `};
    font-size: 1em;
  }
`;

export const InfosRight = styled.div`
  height: 90%;
  width: 50%;
  ${({ theme }) => css`
    margin-left: 10px;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 30px 20px 20px 20px;
  `};

  h2 {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      line-height: 1em;
    `};
    font-size: 1.6em;
  }

  h3 {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
    `};
    font-size: 1em;
  }
`;

export const DividerLine = styled.div`
  height: 7px;
  width: calc(100% - 20px);
  margin: 15px 3px 15px 3px;
  ${({ theme }) => css`
    background-color: #c1fd35;
  `};
`;
