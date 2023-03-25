import { InputText } from 'components/input/input-text/InputText';
import * as s from './steptwo.styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from 'pages/login/schemas';
import { ModInput } from './steptwo.styles';
import { Button, PageTitle } from 'components';
import { useEffect, useMemo, useState } from 'react';
import PaymentStepThree from '../StepThree';
import { useRouter } from 'next/router';
const PaymentStepTwo = () => {
  const router = useRouter();
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
  const returnOnClick = () => {
    setPayService(false);
    router.push('/payments');
    console.log(payService);
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
          <s.ModButton>
            <Button variant="primary" size="large" onClick={onClick}>
              Continuar
            </Button>
          </s.ModButton>
          <s.ModButton>
            <Button variant="tertiary" size="large" onClick={returnOnClick}>
              Voltar
            </Button>
          </s.ModButton>
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
