import styled from 'styled-components';

export const FlagContainer = styled.div`
  width: 2.75rem;
  height: 2rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.secondaryGray};
  opacity: 0.5;
`;
