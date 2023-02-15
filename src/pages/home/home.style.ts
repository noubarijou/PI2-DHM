import styled, { css } from 'styled-components';

export const WomanImage = styled.img`
  @media only screen and (max-width: 915px) {
    ${({ theme }) => css`
      height: 70vh;
      object-fit: cover;
      object-position: 53% 0;
      top: 0;
    `};
  }
  height: 100vh;
  width: 100vw;
  display: flex;
  position: absolute;
  z-index: -10;

  @media only screen and (max-width: 1180px) {
    /* ${({ theme }) => css`
      object-fit: cover;
      object-position: 53% 0;
    `}; */
  }

  ${({ theme }) => css`
    object-fit: cover;
    object-position: 53% 5vw;
  `};
`;

export const ContainerPage = styled.div`
  @media only screen and (max-width: 915px) {
    height: 100vh;
  }

  height: 98vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  overflow: hidden;
  ${({ theme }) => css`
    overflow: hidden;
  `};

  .infos-container {
    @media only screen and (max-width: 915px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 95%;
      height: 60%;
      padding-bottom: 10px;
    }
    display: flex;
    justify-content: space-between;
    width: 70%;
    height: 42%;
  }
`;

export const GreenBottomContainer = styled.div`
  @media only screen and (max-width: 915px) {
    height: 50%;
  }
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
  @media only screen and (max-width: 915px) {
    height: 90%;
    width: 95%;
    margin-right: 0;
    margin-bottom: 10px;
  }
  height: 90%;
  width: 50%;
  ${({ theme }) => css`
    margin-right: 10px;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 30px 20px 20px 20px;
  `};

  h2 {
    @media only screen and (max-width: 1180px) {
      ${({ theme }) => css`
        font-family: ${theme.font.family};
        line-height: 1em;
      `};
      font-size: 1.2em;
    }

    ${({ theme }) => css`
      font-family: ${theme.font.family};
      line-height: 1em;
    `};
    font-size: 1.6em;
  }

  h3 {
    @media only screen and (max-width: 1180px) {
      ${({ theme }) => css`
        font-family: ${theme.font.family};
        font-weight: ${theme.font.normal};
      `};
      font-size: 0.9em;
    }

    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
    `};
    font-size: 1em;
  }
`;

export const InfosRight = styled.div`
  @media only screen and (max-width: 915px) {
    height: 90%;
    width: 95%;
    margin-left: 0;
    margin-bottom: 10px;
  }

  height: 90%;
  width: 50%;
  ${({ theme }) => css`
    margin-left: 10px;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 30px 20px 20px 20px;
  `};

  h2 {
    @media only screen and (max-width: 1180px) {
      ${({ theme }) => css`
        font-family: ${theme.font.family};
        line-height: 1em;
      `};
      font-size: 1.2em;
    }

    ${({ theme }) => css`
      font-family: ${theme.font.family};
      line-height: 1em;
    `};
    font-size: 1.6em;
  }

  h3 {
    @media only screen and (max-width: 1180px) {
      ${({ theme }) => css`
        font-family: ${theme.font.family};
        font-weight: ${theme.font.normal};
      `};
      font-size: 0.9em;
    }

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

export const SmallTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 350px;
  padding-left: 50px;

  .small-text {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
      color: #ffffff;
    `};
  }

  span {
    color: #c1fd35;
    font-size: 0.75em;
  }
`;

export const SmallTextSession = styled.div`
  @media only screen and (max-width: 915px) {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
  }

  height: 58%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: center;
`;
