import * as s from './profile.styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useTheme } from 'styled-components';
import { MdEdit, MdContentCopy } from 'react-icons/md';
import Link from 'next/link';
import { Button, ContainerPage, PageTitle, TableContainer } from 'components';
import { useEffect, useState } from 'react';
import { UserData } from 'pages/home/types';
import { useGetUserData } from 'hooks/useUser/useGetUserData';
import { useGetAccount } from 'hooks/useAccount/useGetAcctData';
const Profile = () => {
  const {
    colors: { secondaryWhite }
  } = useTheme();
  const [isRetrievingData, setIsRetrievingData] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState<string | number>();

  const userData: UserData = JSON.parse(
    localStorage.getItem('userData') || '{}'
  );

  const { data: userInfo } = useGetUserData(userData.id);
  const { data: accountInfo } = useGetAccount(userData.id);

  const retrievingData = (userInfo: any) => {
    return isRetrievingData ? (
      <s.LoadingInfo>Carregando</s.LoadingInfo>
    ) : (
      userInfo
    );
  };

  useEffect(() => {
    if (userInfo) {
      setIsRetrievingData(false);
    }
  }, [userInfo]);
  return (
    <>
      <ContainerPage>
        <PageTitle>Perfil</PageTitle>
        <TableContainer title="Seus dados">
          <s.PersonalInfo>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Email </s.InfoDescription>
              <s.InfoContent>
                <span>meuemail@email.com</span>
              </s.InfoContent>
              <s.EditIcon />
            </s.InfoDescriptionContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Nome</s.InfoDescription>
              <s.InfoContent>
                <span>Jonas Antunes</span>
              </s.InfoContent>
              <s.EditIcon />
            </s.InfoDescriptionContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>CPF </s.InfoDescription>
              <s.InfoContent>
                <span>12345678910</span>
              </s.InfoContent>
              <s.EditIcon />
            </s.InfoDescriptionContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Telefone </s.InfoDescription>
              <s.InfoContent>
                <span>12345678910</span>
              </s.InfoContent>
              <s.EditIcon />
            </s.InfoDescriptionContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Senha </s.InfoDescription>
              <s.InfoContent>
                <span>********</span>
              </s.InfoContent>
              <s.EditIcon />
            </s.InfoDescriptionContainer>
          </s.PersonalInfo>
        </TableContainer>
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
          <s.CVUAliasTop>
            Alias
            <MdContentCopy />
          </s.CVUAliasTop>
          <s.CVUAliasText>estealiasnãoexiste</s.CVUAliasText>
        </s.CVUAliasCard>
      </ContainerPage>
    </>
  );
};

export default Profile;
