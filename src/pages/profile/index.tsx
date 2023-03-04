import * as s from './profile.styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { MdEdit, MdContentCopy } from 'react-icons/md';
import Link from 'next/link';
import { useGetUserData } from 'hooks/useUser/useGetUser';
import { Button, ContainerPage, PageTitle, SideMenu, Footer } from 'components';
const Profile = () => {
  const {
    colors: { secondaryWhite }
  } = useTheme();

  return (
    <>
      <SideMenu />
      <ContainerPage>
        <PageTitle>Perfil</PageTitle>
        <s.PersonalInfo>
          <s.InfoTitle>Seus dados</s.InfoTitle>
          <s.DividerLine />
          <s.InfoContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Email </s.InfoDescription>
              <s.InfoDescription>meuemail@email.com</s.InfoDescription>
            </s.InfoDescriptionContainer>
            <MdEdit color={secondaryWhite} />
          </s.InfoContainer>
          <s.DividerLine />
          <s.InfoContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Nome e Sobrenome</s.InfoDescription>
              <s.InfoDescription>Jonas Antunes</s.InfoDescription>
            </s.InfoDescriptionContainer>
            <MdEdit color={secondaryWhite} />
          </s.InfoContainer>
          <s.DividerLine />
          <s.InfoContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>CPF </s.InfoDescription>
              <s.InfoDescription>12345678910</s.InfoDescription>
            </s.InfoDescriptionContainer>
            <MdEdit color={secondaryWhite} />
          </s.InfoContainer>
          <s.DividerLine />
          <s.InfoContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Telefone </s.InfoDescription>
              <s.InfoDescription>12345678910</s.InfoDescription>
            </s.InfoDescriptionContainer>
            <MdEdit color={secondaryWhite} />
          </s.InfoContainer>
          <s.DividerLine />
          <s.InfoContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Senha </s.InfoDescription>
              <s.InfoDescription>********</s.InfoDescription>
            </s.InfoDescriptionContainer>
            <MdEdit color={secondaryWhite} />
          </s.InfoContainer>
          <s.DividerLine />
        </s.PersonalInfo>
        <s.ButtonContainer>
          <Link href="/">
            <Button variant="primary" size="wallet">
              Administrar meios de pagamento
              <AiOutlineArrowRight />
            </Button>
          </Link>
        </s.ButtonContainer>
        <s.CVUAliasCard>
          <s.CVUAliasText>
            Copiar seu CVU ou alias para adicionar ou transferir valor a partir
            de outra conta
          </s.CVUAliasText>
          <s.CVUAliasTop>
            CVU
            <MdContentCopy />
          </s.CVUAliasTop>
          <s.CVUAliasText>0000002100075320000000</s.CVUAliasText>
          <s.DividerLine />
          <s.CVUAliasTop>
            Alias
            <MdContentCopy />
          </s.CVUAliasTop>
          <s.CVUAliasText>estealiasnãoexiste</s.CVUAliasText>
        </s.CVUAliasCard>
      </ContainerPage>
      <Footer />
    </>
  );
};

export default Profile;
