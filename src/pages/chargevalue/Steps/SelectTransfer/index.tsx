import React from 'react';
import { PageTitle } from 'components';
import * as s from './value.style';
import { BsPersonCircle } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { BsCreditCard2Front } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { useStepsStore } from 'store/steps';

const Value = () => {
  const setStep = useStepsStore(state => state.setStep);

  const {
    colors: { primary }
  } = useTheme();

  return (
    <>
      <PageTitle>Carregar valor</PageTitle>
      <s.optionsContainer onClick={() => setStep(1)}>
        <div>
          <BsPersonCircle size={35} color={primary} />
          <h1>Transferência Bancária</h1>
        </div>
        <FiArrowRight size={35} color={primary} />
      </s.optionsContainer>
      <s.optionsContainer onClick={() => setStep(2)}>
        <div>
          <BsCreditCard2Front size={35} color={primary} />
          <h1>Selecionar Cartão</h1>
        </div>
        <FiArrowRight size={35} color={primary} />
      </s.optionsContainer>
    </>
  );
};

export default Value;
