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
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { useUserStore } from 'store/user';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { '@digitalmoney:token': token } = nookies.get(ctx);

  // console.log(user);
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
  const {
    colors: { primary }
  } = useTheme();

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
            <s.Balance>$ 6.890.534,17</s.Balance>
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
          <s.ActivityContainer>
            <s.ActivityDescription>
              <BsCircleFill color={primary} size="20" />
              <s.ActivityDescriptionText>
                Transferência para Rodrigo
              </s.ActivityDescriptionText>
            </s.ActivityDescription>
            <s.ActivityValue>
              <s.ActivityDescriptionText>-$1265,57</s.ActivityDescriptionText>
              <span>Sábado</span>
            </s.ActivityValue>
          </s.ActivityContainer>
          <s.ActivityContainer>
            <s.ActivityDescription>
              <BsCircleFill color={primary} size="20" />
              <s.ActivityDescriptionText>
                Transferência para Rodrigo
              </s.ActivityDescriptionText>
            </s.ActivityDescription>
            <s.ActivityValue>
              <s.ActivityDescriptionText>-$1265,57</s.ActivityDescriptionText>
              <span>Sábado</span>
            </s.ActivityValue>
          </s.ActivityContainer>
          <s.ActivityContainer>
            <s.ActivityDescription>
              <BsCircleFill color={primary} size="20" />
              <s.ActivityDescriptionText>
                Transferência para Rodrigo
              </s.ActivityDescriptionText>
            </s.ActivityDescription>
            <s.ActivityValue>
              <s.ActivityDescriptionText>-$1265,57</s.ActivityDescriptionText>
              <span>Sábado</span>
            </s.ActivityValue>
          </s.ActivityContainer>
          <s.ActivityContainer>
            <s.ActivityDescription>
              <BsCircleFill color={primary} size="20" />
              <s.ActivityDescriptionText>
                Transferência para Rodrigo
              </s.ActivityDescriptionText>
            </s.ActivityDescription>
            <s.ActivityValue>
              <s.ActivityDescriptionText>-$1265,57</s.ActivityDescriptionText>
              <span>Sábado</span>
            </s.ActivityValue>
          </s.ActivityContainer>
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
