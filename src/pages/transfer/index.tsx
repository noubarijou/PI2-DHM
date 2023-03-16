import React from 'react';
import { ContainerPage, PageTitle } from 'components';
import * as s from './transfer.style';
import { MdOutlineContentCopy } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';

const Transfer = () => {
  const router = useRouter();

  const {
    colors: { primary }
  } = useTheme();

  return (
    <ContainerPage>
      <s.mainContainer>
        <p className="main-text">
          Copie seu código de verificação ou nome de usuário para começar a
          transferir dinheiro de outra conta
        </p>
        <s.codeContainer>
          <div>
            <h1>Código de verificação</h1>
            <p>0000002100075320000000</p>
          </div>
          <MdOutlineContentCopy
            style={{ cursor: 'pointer' }}
            size={35}
            color={primary}
          />
        </s.codeContainer>
        <s.infoContainer>
          <div>
            <h1>Nome de usuário</h1>
            <p>Rodrigo.Vaccaro</p>
          </div>
          <MdOutlineContentCopy
            style={{ cursor: 'pointer' }}
            size={35}
            color={primary}
          />
        </s.infoContainer>
      </s.mainContainer>
    </ContainerPage>
  );
};

export default Transfer;
