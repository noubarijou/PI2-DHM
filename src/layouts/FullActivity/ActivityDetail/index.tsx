import * as s from './ActivityDetail.style';
import { Button, ContainerPage, PageTitle } from '../../../components';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Link from 'next/link';

const ActivityDetail = () => {
  return (
    <>
      <ContainerPage>
        <PageTitle>Suas atividades</PageTitle>
        <s.BlackContainer>
          <s.titleContainer>
            <div>
              <AiOutlineCheckCircle size="25" />
              <s.EmphasisText>Aprovada</s.EmphasisText>
            </div>
            <s.InfoDate className="desktop">
              Criado em 17 de agosto de 2022 às 16h34h
            </s.InfoDate>
          </s.titleContainer>
          <s.InfoDate className="mobile">
            Criado em 17 de agosto de 2022 às 16h34h
          </s.InfoDate>
          <s.InfoContainer>
            <s.InfoSubTitle>Transferência em dinheiro</s.InfoSubTitle>
            <s.EmphasisText>$1.266,57</s.EmphasisText>
            <s.InfoSubTitle>Transferido para</s.InfoSubTitle>
            <s.EmphasisText>Rodrigo Vaccaro</s.EmphasisText>
            <s.InfoSubTitle>Número da operação</s.InfoSubTitle>
            <s.EmphasisText className="number">27903047281</s.EmphasisText>
          </s.InfoContainer>
        </s.BlackContainer>
        <s.BtnContainer>
          <Button size="large">Baixar Comprovante</Button>
          <Button variant="tertiary" size="large">
            <Link href="/wallet">Voltar ao início</Link>
          </Button>
        </s.BtnContainer>
      </ContainerPage>
    </>
  );
};

export default ActivityDetail;
