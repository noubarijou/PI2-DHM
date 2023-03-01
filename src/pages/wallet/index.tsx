import Footer from 'components/footer';
import * as s from './wallet.styles';
import { Button, SideMenu } from 'components';
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
      <SideMenu />
      <s.ContainerPage>
        <s.PageTitle>
          <AiOutlineArrowRight />
          <s.PageTitleContent>Início</s.PageTitleContent>
        </s.PageTitle>
        <s.AvailableMoneyCard>
          <s.TopLinks>
            <s.Links href="/">Ver cartões</s.Links>
            <s.Links href="/">Ver CVU</s.Links>
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
        <s.RecentActivity>
          <s.ActivityTitle>Sua atividade</s.ActivityTitle>
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
        </s.RecentActivity>
      </s.ContainerPage>
      <Footer />
    </>
  );
};

export default Wallet;
