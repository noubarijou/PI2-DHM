import { InputText } from 'components/input/input-text/InputText';
import * as s from './steptwo.styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from 'pages/login/schemas';
import { ModInput } from './steptwo.styles';
import { Button, PageTitle } from 'components';
import { useState } from 'react';
import PaymentStepThree from '../StepThree';

const PaymentStepTwo = () => {
  const { control } = useForm({
    defaultValues: {
      search: ''
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all'
  });
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
            <s.CardTitle>Número da conta</s.CardTitle>
            <s.InputContainer>
              <ModInput
                name="search"
                control={control}
                placeholder=""
                className="search"
              />
            </s.InputContainer>
          </s.BillInfoCard>
          <s.ButtonContainer>
            <Button variant="primary" size="xsmall" onClick={onClick}>
              Continuar
            </Button>
          </s.ButtonContainer>
        </>
      ) : (
        <>
          <PaymentStepThree />
        </>
      )}
    </>
  );
};

export default PaymentStepTwo;
