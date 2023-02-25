import SignedInHeader from '../../components/SignedInHeader';
import Footer from 'components/footer';
import * as s from './wallet.styles';
import { Button } from 'components';
import Link from 'next/link';
import { InputText } from 'components/input/input-text/InputText';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from 'pages/login/schemas';

const Wallet = () => {
  const { control } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all'
  });
  return (
    <>
      <SignedInHeader />
      <s.ContainerPage>
        <s.AvailableMoneyCard>
          <Link href="/">
            <s.whiteText>Ver cartões</s.whiteText>
          </Link>
          <Link href="/">
            <s.whiteText>Ver CVU</s.whiteText>
          </Link>
          <s.whiteText>Dinheiro disponível</s.whiteText>
        </s.AvailableMoneyCard>
        <s.ButtonInputContainer>
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
          <InputText
            name="search"
            control={control}
            placeholder="Pesquisar em sua atividade"
          />
        </s.ButtonInputContainer>
        <s.RecentActivity>
          <s.blackText>Sua atividade</s.blackText>
          <s.DividerLine />
          <s.blackText>Transferência para Rodrigo</s.blackText>
          <s.DividerLine />
          <s.blackText>Transferência para Consórcio</s.blackText>
          <s.DividerLine />
          <s.blackText>Valor adicionado</s.blackText>
          <s.DividerLine />
          <s.blackText>Transferência recebida</s.blackText>
        </s.RecentActivity>
      </s.ContainerPage>
      <Footer />
    </>
  );
};

export default Wallet;
