import { yupResolver } from '@hookform/resolvers/yup';
import { ContainerPage, PageTitle } from 'components';
import { schemaLogin } from 'pages/login/schemas';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as s from './payments.styles';
import { InputText } from 'components/input/input-text/InputText';
import { Selecionar as Link } from './payments.styles';
import PaymentStepTwo from 'layouts/Payments/StepTwo';
import Image from 'next/image';

const StepOne = () => {
  const [payService, setPayService] = useState(false);
  const onClick = (e: any) => {
    e.preventDefault();
    setPayService(true);
  };
  const { control } = useForm({
    defaultValues: {
      search: ''
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all'
  });
  return (
    <ContainerPage>
      <PageTitle>Pagar Serviços</PageTitle>
      {!payService ? (
        <>
          <s.InputContainer>
            <InputText
              name="search"
              control={control}
              placeholder="Pesquisar serviços"
              className="search"
            />
            <s.SearchIcon />
          </s.InputContainer>
          <s.PaymentsTable>
            <s.PaymentsHeader>
              <p>Mais recentes</p>
            </s.PaymentsHeader>
            <s.PaymentsContainer>
              <Image
                alt="logo claro"
                src="../../../assets/images/payments/logoclaro.svg"
                height="38"
                width="67"
              />
              <p>Claro</p>
              <Link onClick={onClick}>Selecionar</Link>
            </s.PaymentsContainer>
            <s.PaymentsContainer>
              <Image
                alt="logo claro"
                src="../../../assets/images/payments/logopersonal.svg"
                height="38"
                width="67"
              />
              <p>Claro</p>
              <Link onClick={onClick}>Selecionar</Link>
            </s.PaymentsContainer>
            <s.PaymentsContainer>
              <Image
                alt="logo claro"
                src="../../../assets/images/payments/logocablevision.svg"
                height="38"
                width="67"
              />
              <p>Claro</p>
              <Link onClick={onClick}>Selecionar</Link>
            </s.PaymentsContainer>
            <s.PaymentsContainer>
              <Image
                alt="logo claro"
                src="../../../assets/images/payments/logoclaro.svg"
                height="38"
                width="67"
              />
              <p>Claro</p>
              <Link onClick={onClick}>Selecionar</Link>
            </s.PaymentsContainer>
            <s.PaymentsContainer>
              <Image
                alt="logo claro"
                src="../../../assets/images/payments/logopersonal.svg"
                height="38"
                width="67"
              />
              <p>Claro</p>
              <Link onClick={onClick}>Selecionar</Link>
            </s.PaymentsContainer>
            <s.PaymentsContainer>
              <Image
                alt="logo claro"
                src="../../../assets/images/payments/logocablevision.svg"
                height="38"
                width="67"
              />
              <p>Claro</p>
              <Link onClick={onClick}>Selecionar</Link>
            </s.PaymentsContainer>
          </s.PaymentsTable>
        </>
      ) : (
        <>
          <PaymentStepTwo />
        </>
      )}
    </ContainerPage>
  );
};

export default StepOne;
