import { ContainerPage, PageTitle, TableContainer } from 'components';
import { useGetCards } from 'hooks/useCards/useGetCards';
import { useCreateCard } from 'hooks/useCards/useCreateCard';
import { useDeleteCard } from 'hooks/useCards/useDeleteCard';
import AddCard from 'layouts/AddCard';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AiOutlineArrowRight, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import * as s from './cards.style';

const Cards = () => {
  const [addNewCard, setAddNewCard] = useState(false);
  const [cards, setCards] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { mutate: getCardsList } = useGetCards();
  const { mutate: createCard } = useCreateCard();
  const { mutate: deleteCard } = useDeleteCard();

  const onClick = (e: any) => {
    e.preventDefault();
    setAddNewCard(true);
  };

  useEffect(() => {
    if (loading) {
      getCardsList(void 1, {
        onSuccess: res => setCards(res),
        onError: err => console.log(err)
      });
      setLoading(false);
    }
  }, [cards, loading]);

  const handleCreateCard = (data: any) => {
    createCard(data, {
      onSuccess: res => setLoading(true),
      onError: err => console.log(err)
    });
  };

  const handleDeleteCard = (cardNumber: any) => {
    deleteCard(cardNumber, {
      onSuccess: res =>
        getCardsList(void 1, {
          onSuccess: res => setCards(res),
          onError: err => console.log(err)
        }),
      onError: err => console.log(err)
    });
  };

  const {
    colors: { primary }
  } = useTheme();

  return (
    <>
      <Head>
        <title>DMH | Cards</title>
      </Head>
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
                {!loading &&
                  cards?.length !== 0 &&
                  cards?.map((card: any, index: number) => (
                    <s.DataContainer key={index}>
                      <s.Description>
                        <BsCircleFill color={primary} size="20" />
                        <s.DescriptionText>
                          Termina em {card.number_id.toString().slice(-4)}
                        </s.DescriptionText>
                      </s.Description>
                      <s.DeleteCardBtn
                        onClick={() => handleDeleteCard(card.id)}
                      >
                        Eliminar
                      </s.DeleteCardBtn>
                    </s.DataContainer>
                  ))}
              </TableContainer>
            </>
          ) : (
            <>
              <AddCard
                handleCreateCard={handleCreateCard}
                setAddNewCard={setAddNewCard}
              />
            </>
          )}
        </>
      </ContainerPage>
    </>
  );
};

export default Cards;
