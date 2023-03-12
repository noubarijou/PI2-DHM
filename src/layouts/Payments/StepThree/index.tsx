import { Button, ContainerPage, PageTitle, TableContainer } from 'components';
import * as s from './stepthree.styles';
import { BsCircleFill } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import PaymentSuccessful from '../Success';

const PaymentStepThree = () => {
  const {
    colors: { primary }
  } = useTheme();
  const [payService, setPayService] = useState(false);
  const onClick = (e: unknown) => {
    e.preventDefault();
    setPayService(true);
  };
  return (
    <>
      {!payService ? (
        <>
          <s.BillInfoCard>
            <s.DetailsContainer>
              <s.DetailsText>Ver detalhes do pagamento</s.DetailsText>
            </s.DetailsContainer>
            <s.CardTitle>TV a cabo</s.CardTitle>
            <s.DividerLine />
            <s.TotalContainer>
              <s.DetailsText>Total a pagar</s.DetailsText>
              <s.DetailsText>$1.153,75</s.DetailsText>
            </s.TotalContainer>
          </s.BillInfoCard>
          <TableContainer title="Seus cartões">
            <s.DataContainer>
              <s.Description>
                <BsCircleFill color={primary} size="20" />
                <s.DescriptionText>Termina em</s.DescriptionText>
              </s.Description>
            </s.DataContainer>
          </TableContainer>
          <s.ButtonContainer>
            <Button variant="primary" size="medium" onClick={onClick}>
              Pagar
            </Button>
          </s.ButtonContainer>
        </>
      ) : (
        <>
          <PaymentSuccessful />
        </>
      )}
    </>
  );
};
export default PaymentStepThree;
