import styled from 'styled-components';
import { BoldContent } from '../TransferDataPreview/transferdatapreview.styles';

export const Amount = styled(BoldContent)`
  display: block;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  max-width: 50%;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    max-width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 70%;
  justify-content: flex-end;
`;

export const DepositValueError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  border-radius: 0.5rem;
  margin: 2rem auto;
  padding: 1.5rem;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};

  .divider {
    height: 1px;
    width: 100%;
    opacity: 20%;
    border-radius: 1px;
    background-color: lightgray;
  }

  & button {
    align-self: flex-end;
    margin-right: 1rem;
    @media (max-width: 930px) {
      width: 100%;
    }
  }

  & div:has(input) {
    width: 100%;
  }
  & input {
    @media (max-width: 930px) {
      width: 100%;
    }
  }
`;
