import * as s from './FlacgContainer.style';

type FlagProps = {
  cardNumber?: number;
};

const FlagContainer = ({ cardNumber }: FlagProps) => {
  const number = cardNumber;

  const verifyFlag = () => {};
  return (
    <>
      <s.FlagContainer></s.FlagContainer>
    </>
  );
};

export { FlagContainer };
