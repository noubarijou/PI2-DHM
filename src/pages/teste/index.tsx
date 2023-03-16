import React from 'react';
import { ContainerPage } from 'components';
import PaymentStepTwo from 'layouts/Payments/StepTwo';
import PaymentStepThree from 'layouts/Payments/StepThree';
import PaymentSuccessful from 'layouts/Payments/Success';
import Payments from '../payments/index';
import StepOne from 'layouts/Payments/StepOne';

const Teste = () => {
  return (
    <ContainerPage>
      <Payments />
    </ContainerPage>
  );
};

export default Teste;
