import SignedInHeader from '../../components/SignedInHeader';
import Footer from 'components/footer';
import * as s from './wallet.styles';
import { Button } from 'components';
import Link from 'next/link';
import { InputText } from 'components/input/input-text/InputText';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from 'pages/login/schemas';
import { api } from 'api/client';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { useTheme } from 'styled-components';

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
      <SignedInHeader />
      <s.ContainerPage>
        <s.PageTitle>
          <AiOutlineArrowRight />
          <s.PageTitleContent>Inicio</s.PageTitleContent>
        </s.PageTitle>
        <s.AvailableMoneyCard>
          <s.TopLinks>
            <Link href="/">
              <s.Links>Ver cartões</s.Links>
            </Link>
            <Link href="/">
              <s.Links>Ver CVU</s.Links>
            </Link>
          </s.TopLinks>
          <s.whiteText>Dinheiro disponível</s.whiteText>
          <s.AvailableMoney>
            <s.Balance>$ 6.890.534,17</s.Balance>
          </s.AvailableMoney>
        </s.AvailableMoneyCard>
        <s.ButtonContainer>
          <Link href="/">
            <Button variant="primary" size="wallet">
              Transferir valor
            </Button>
          </Link>
          <Link href="/">
            <Button variant="primary" size="wallet">
              Adicionar valor
            </Button>
          </Link>
        </s.ButtonContainer>
        <s.InputContainer>
          <InputText
            name="search"
            control={control}
            placeholder="Pesquisar em sua atividade"
          />
        </s.InputContainer>
        <s.RecentActivity>
          <s.ActivityTitle>Sua atividade</s.ActivityTitle>
          <s.DividerLine />
          <s.ActivityContainer>
            <BsCircleFill color={primary} />
            <s.ActivityDescription>
              Transferência para Rodrigo
            </s.ActivityDescription>
            <s.ActivityValue>-$1265,57 Sábado</s.ActivityValue>
          </s.ActivityContainer>
          <s.ActivityContainer>
            <BsCircleFill color={primary} />
            <s.ActivityDescription>
              Transferência para Rodrigo
            </s.ActivityDescription>
            <s.ActivityValue>-$1265,57 Sábado</s.ActivityValue>
          </s.ActivityContainer>
          <s.ActivityContainer>
            <BsCircleFill color={primary} />
            <s.ActivityDescription>
              Transferência para Rodrigo
            </s.ActivityDescription>
            <s.ActivityValue>-$1265,57 Sábado</s.ActivityValue>
          </s.ActivityContainer>
          <s.ActivityContainer>
            <BsCircleFill color={primary} />
            <s.ActivityDescription>
              Transferência para Rodrigo
            </s.ActivityDescription>
            <s.ActivityValue>-$1265,57 Sábado</s.ActivityValue>
          </s.ActivityContainer>
          <s.LinkFullActivity>
            <s.FullActivityText>Ver toda sua atividade</s.FullActivityText>
            <AiOutlineArrowRight />
          </s.LinkFullActivity>
        </s.RecentActivity>
      </s.ContainerPage>
      <Footer />
    </>
  );
};

export default Wallet;
