import React, { useState } from 'react';
import { ContainerPage } from 'components';
import * as s from './card.style';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useTheme } from 'styled-components';

const Card = () => {
  const [selected, setSelected] = useState([true, false]);

  const {
    colors: { primary }
  } = useTheme();

  return (
    <ContainerPage>
      <s.allDiv>
        <s.mainContainer>
          <h1>Selecione um cartão</h1>
          <s.cardsContainer>
            <p>Seus cartões</p>
            <s.cardContainer>
              <div className="card">
                <div className="circle"></div>
                <p>Final 0000</p>
              </div>
              {selected[0] === true ? (
                <div
                  className="checkbox"
                  onClick={() => setSelected([true, false])}
                >
                  <s.insideCircle></s.insideCircle>
                </div>
              ) : (
                <div
                  className="checkbox"
                  onClick={() => setSelected([true, false])}
                ></div>
              )}
            </s.cardContainer>
            <div className="divider"></div>
            <s.cardContainer>
              <div className="card">
                <div className="circle"></div>
                <p>Final 4758</p>
              </div>
              {selected[1] === true ? (
                <div
                  className="checkbox"
                  onClick={() => setSelected([false, true])}
                >
                  <s.insideCircle></s.insideCircle>
                </div>
              ) : (
                <div
                  className="checkbox"
                  onClick={() => setSelected([false, true])}
                ></div>
              )}
            </s.cardContainer>
          </s.cardsContainer>
          <s.lastContainer>
            <div>
              <AiOutlinePlusCircle size={45} color={primary} />
              <h2>Novo cartão</h2>
            </div>
            <s.button>Continuar</s.button>
          </s.lastContainer>
        </s.mainContainer>
        <s.buttonMobile>Continuar</s.buttonMobile>
      </s.allDiv>
    </ContainerPage>
  );
};

export default Card;
