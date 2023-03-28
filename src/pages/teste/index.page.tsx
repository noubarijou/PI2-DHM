import React from 'react';
import { ContainerPage } from 'components';
import PaymentStepTwo from 'layouts/Payments/StepTwo';
import PaymentStepThree from 'layouts/Payments/StepThree';
import PaymentSuccessful from 'layouts/Payments/Success';
import Payments from '../payments/index.page';
import StepOne from 'layouts/Payments/StepOne';
import ActivityDetail from 'layouts/FullActivity/ActivityDetail';
import { getTransaction } from 'hooks/useAccount/useGetAcctTransaction';

const Teste = () => {
  return (
    <ContainerPage>
      <ActivityDetail transactionId={1} />
    </ContainerPage>
  );
};

export default Teste;
