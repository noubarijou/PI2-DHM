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
import { useGetAccount } from 'hooks/useAccount/useGetAcctData';
import { useGetAcctActivity } from 'hooks/useAccount/useGetAcctActivity';
import { AcctActivity } from 'hooks/useAccount/useGetAcctActivity/types';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { useUserStore } from 'store/user';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { '@digitalmoney:token': token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      },
      props: {}
    };
  }

  return {
    props: {}
  };
}

const Wallet = () => {
  const { control } = useForm({
    defaultValues: {
      search: ''
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all'
  });
  const user = useUserStore(state => state.user);

  const {
    colors: { primary }
  } = useTheme();

  const { data: accountInfo } = useGetAccount(user.id);
  const { data: activityInfo } = useGetAcctActivity(user.id);

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
          {activityInfo &&
            activityInfo.map((activity: AcctActivity) => (
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
                  <span>
                    {format(new Date(activity?.dated), 'EEEE', { locale: pt })}
                  </span>
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
