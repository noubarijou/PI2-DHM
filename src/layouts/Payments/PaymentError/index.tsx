import * as e from './paymentError.styles';
import { Button } from 'components';
import { TiDeleteOutline } from 'react-icons/ti';
import { useState } from 'react';
import PaymentStepTwo from '../StepTwo';

export function PaymentError() {
  const [payService, setPayService] = useState(false);

  return !payService ? (
    <>
      <e.DepositValueError>
        <TiDeleteOutline size={75} color={'#FF0000'} />
        <e.Amount>Não encontramos faturas associadas a esses dados</e.Amount>
        <div className="divider"></div>
        <e.Span>
          Revise os dados adicionados. Se estão corretos, é possível que a
          empresa ainda não carregou a sua fatura.
        </e.Span>
      </e.DepositValueError>
      <e.ButtonContainer>
        <Button variant="primary" onClick={() => setPayService(true)}>
          Revisar dados
        </Button>
      </e.ButtonContainer>
    </>
  ) : (
    <PaymentStepTwo />
  );
}
