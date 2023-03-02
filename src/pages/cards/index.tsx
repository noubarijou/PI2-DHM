import { ContainerPage, PageTitle, SideMenu, TableContainer } from 'components';
import Footer from 'components/footer';
import AddCard from 'layouts/AddCard';
import Head from 'next/head';
import { useState } from 'react';
import { AiOutlineArrowRight, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import * as s from './cards.style';

const Cards = () => {
  const [addNewCard, setAddNewCard] = useState(false);

  const onClick = (e: any) => {
    e.preventDefault();
    setAddNewCard(true);
  };

  const {
    colors: { primary }
  } = useTheme();

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
              <TableContainer title="Seus cartões">
                <s.DataContainer>
                  <s.Description>
                    <BsCircleFill color={primary} size="20" />
                    <s.DescriptionText>Termina em 0000</s.DescriptionText>
                  </s.Description>
                  <s.DeleteCardBtn>Eliminar</s.DeleteCardBtn>
                </s.DataContainer>
                <s.DataContainer>
                  <s.Description>
                    <BsCircleFill color={primary} size="20" />
                    <s.DescriptionText>Termina em 4067</s.DescriptionText>
                  </s.Description>
                  <s.DeleteCardBtn>Eliminar</s.DeleteCardBtn>
                </s.DataContainer>
                <s.DataContainer>
                  <s.Description>
                    <BsCircleFill color={primary} size="20" />
                    <s.DescriptionText>Termina em 8040</s.DescriptionText>
                  </s.Description>
                  <s.DeleteCardBtn>Eliminar</s.DeleteCardBtn>
                </s.DataContainer>
              </TableContainer>
            </>
          ) : (
            <>
              <AddCard />
            </>
          )}
        </>
      </ContainerPage>
      <Footer />
    </>
  );
};

export default Cards;
