import styled, { css } from 'styled-components';

// export const ContainerPage = styled.div`
//   /* @media only screen and (max-width: 915px) {
//     height: 60px;
//   } */
//   background-color: #3a393e;
//   height: 10vh;
//   width: 100%;
//   display: 'flex';
//   align-items: 'center';

//   .small-text {
//     ${({ theme }) => css`
//       font-family: ${theme.font.family};
//       font-weight: ${theme.font.normal};
//       color: '#C1FD35';
//     `}
// `;

export const ContainerPage = styled.div`
  background-color: #3a393e;
  height: calc(10vh - 8px);
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  z-index: 1;

  .small-text {
    margin-left: 20px;
    display: inline-block;
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
      color: #c1fd35;
    `}
  }
`;
