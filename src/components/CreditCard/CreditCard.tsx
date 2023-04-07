import { useEffect, useState } from 'react';
import * as s from './CreditCard.style';
import { FlagContainer } from './FlagContainer/FlagContainer';

export type CreditCardProps = {
  cardNumber?: string;
  cardName?: string;
  cardExpiration?: string;
  cvv?: number;
  cvvOnFocus: boolean;
};

const CreditCard = ({
  cardNumber,
  cardName,
  cardExpiration,
  cvv,
  cvvOnFocus
}: CreditCardProps) => {
  const [cardNumMasked, setCardNumMasked] = useState('');
  const cardNum = [
    cardNumber?.slice(0, 4),
    cardNumber?.slice(4, 8),
    cardNumber?.slice(8, 12),
    cardNumber?.slice(12)
  ].join(' ');

  useEffect(() => {
    setCardNumMasked(cardNum);
  });

  return (
    <>
      <div id="credit-card">
        {!cvvOnFocus ? (
          <s.CreditCardContainer variant={!!cardNumber ? 'valid' : 'disabled'}>
            <FlagContainer cardNumber={Number(cardNumber)} />
            <s.NumberContainer>
              {!!cardNumber ? cardNumMasked : '**** **** **** ****'}
            </s.NumberContainer>
            <s.InfoContainer>
              <p>{!!cardName ? cardName : 'Nome do titular'}</p>
              <span>{!!cardExpiration ? cardExpiration : 'MM/YY'}</span>
            </s.InfoContainer>
          </s.CreditCardContainer>
        ) : (
          <s.CreditCardContainer
            variant={!!cardNumber ? 'valid' : 'disabled'}
            className="back"
          >
            <div></div>
            <span>{!!cvv ? cvv : 'CVV'}</span>
          </s.CreditCardContainer>
        )}
      </div>
    </>
  );
};

export { CreditCard };
