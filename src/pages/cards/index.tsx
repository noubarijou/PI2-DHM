import {
  ContainerPage,
  CreditCard,
  PageTitle,
  SideMenu,
  TableContainer
} from 'components';
import Footer from 'components/footer';
import Head from 'next/head';
import { useState } from 'react';
import { AiOutlineArrowRight, AiOutlinePlusCircle } from 'react-icons/ai';
import * as s from './cards.style';

const Cards = () => {
  const [addNewCard, setAddNewCard] = useState(false);

  const onClick = (e: any) => {
    e.preventDefault();
    setAddNewCard(true);
  };
  return (
    <>
      <Head>
        <title>DMH | Cards</title>
      </Head>
      <SideMenu />
      <ContainerPage>
        <>
          <PageTitle>Cartões</PageTitle>
          {!addNewCard ? (
            <>
              <s.addNewCardContainer>
                <s.callActionNewCard>
                  Adicione seu cartão de crédito ou débito
                </s.callActionNewCard>
                <s.btnNewCard onClick={onClick}>
                  <AiOutlinePlusCircle size="30" />
                  <p>Novo cartão</p>
                  <AiOutlineArrowRight size="30" />
                </s.btnNewCard>
              </s.addNewCardContainer>
              <TableContainer title="Seus cartões"></TableContainer>
            </>
          ) : (
            <>
              <s.ContainerBackGround>
                <CreditCard />
              </s.ContainerBackGround>
            </>
          )}
        </>
      </ContainerPage>
      <Footer />
    </>
  );
};

export default Cards;
