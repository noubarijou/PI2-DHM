import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
`;

export const Title = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Message = styled.p`
  width: 60%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
