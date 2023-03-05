import * as s from './wallet.styles';
import { Button, ContainerPage, PageTitle, TableContainer } from 'components';
import Link from 'next/link';
import { InputText } from 'components/input/input-text/InputText';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from 'pages/login/schemas';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';
import { UserData } from 'pages/home/types';
import { useGetAccount } from 'hooks/useAccount/useGetAcctData';
import { useGetAcctActivity } from 'hooks/useAccount/useGetAcctActivity';

const Wallet = () => {
  const { control } = useForm({
    defaultValues: {
      search: ''
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all'
  });
  const {
    colors: { primary }
  } = useTheme();
  const userData: UserData = JSON.parse(
    localStorage.getItem('userData') || '{}'
  );
  const { data: accountInfo } = useGetAccount(userData.id);
  const { data: activityInfo } = useGetAcctActivity(userData.id);

  return (
    <>
      <ContainerPage>
        <PageTitle>Início</PageTitle>
        <s.AvailableMoneyCard>
          <s.TopLinks>
            <s.Links href="/cards">Ver cartões</s.Links>
            <s.Links href="/profile">Ver CVU</s.Links>
          </s.TopLinks>
          <s.whiteText>Dinheiro disponível</s.whiteText>
          <s.AvailableMoney>
            <s.Balance>${`${accountInfo?.available_amount} `}</s.Balance>
          </s.AvailableMoney>
        </s.AvailableMoneyCard>
        <s.ButtonContainer>
          <Link href="/">
            <Button variant="primary" size="large">
              Transferir valor
            </Button>
          </Link>
          <Link href="/">
            <Button variant="primary" size="large">
              Adicionar valor
            </Button>
          </Link>
        </s.ButtonContainer>
        <s.InputContainer>
          <s.SearchIcon />
          <InputText
            name="search"
            control={control}
            placeholder="Pesquisar em sua atividade"
            className="search"
          />
        </s.InputContainer>
        <TableContainer title="Sua atividade">
          {activityInfo?.map(activity => (
            <s.ActivityContainer key={activity.id}>
              <s.ActivityDescription>
                <BsCircleFill color={primary} size="20" />
                <s.ActivityDescriptionText>
                  {activity?.description}
                </s.ActivityDescriptionText>
              </s.ActivityDescription>
              <s.ActivityValue>
                <s.ActivityDescriptionText>
                  ${activity?.amount}
                </s.ActivityDescriptionText>
                <span>{activity?.dated}</span>
              </s.ActivityValue>
            </s.ActivityContainer>
          ))}
          <s.LinkFullActivity>
            <s.FullActivityText>Ver toda sua atividade</s.FullActivityText>
            <AiOutlineArrowRight />
          </s.LinkFullActivity>
        </TableContainer>
      </ContainerPage>
    </>
  );
};

export default Wallet;
