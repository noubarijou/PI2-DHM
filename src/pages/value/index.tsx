import React from 'react';
import { ContainerPage, PageTitle } from 'components';
import * as s from './value.style';
import { BsPersonCircle } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { BsCreditCard2Front } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';

const Value = () => {
  const router = useRouter();

  const {
    colors: { primary }
  } = useTheme();

  return (
    <ContainerPage>
      <PageTitle>Carregar valor</PageTitle>
      <s.optionsContainer onClick={() => router.push('transfer')}>
        <div>
          <BsPersonCircle size={35} color={primary} />
          <h1>Transferência Bancária</h1>
        </div>
        <FiArrowRight size={35} color={primary} />
      </s.optionsContainer>
      <s.optionsContainer onClick={() => router.push('card')}>
        <div>
          <BsCreditCard2Front size={35} color={primary} />
          <h1>Selecionar Cartão</h1>
        </div>
        <FiArrowRight size={35} color={primary} />
      </s.optionsContainer>
    </ContainerPage>
  );
};

export default Value;
