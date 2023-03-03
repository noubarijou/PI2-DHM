import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CreditCard } from 'components';
import { InputText } from 'components/input/input-text/InputText';
import * as s from './AddCard.style';
import { schema } from 'pages/cards/schemas';

const AddCard = () => {
  const { control, watch, getValues } = useForm({
    defaultValues: {
      cardNumber: '',
      cardName: '',
      expirationDate: '',
      cardCvv: ''
    },
    resolver: yupResolver(schema),
    mode: 'all'
  });

  return (
    <>
      <s.ContainerBackGround>
        <CreditCard
          cardNumber={Number(watch('cardNumber'))}
          cardName={watch('cardName')}
          cardExpiration={watch('expirationDate')}
          cvv={Number(watch('cardCvv'))}
        />
        <s.Form>
          <s.InputContainer>
            <InputText
              name="cardNumber"
              label="Número do cartão"
              type="number"
              placeholder="Número do cartão*"
              control={control}
              maxLength={16}
              max={16}
            />
            <InputText
              name="cardName"
              label="Nome do títular"
              placeholder="Nome e sobrenome*"
              control={control}
            />
          </s.InputContainer>
          <s.InputContainer>
            <InputText
              name="expirationDate"
              label="Data de validade"
              placeholder="Data de validade*"
              control={control}
            />
            <InputText
              name="cardCvv"
              label="Código de segurança"
              type="number"
              placeholder="Código de segurança*"
              control={control}
            />
          </s.InputContainer>
          <Button>Continuar</Button>
        </s.Form>
      </s.ContainerBackGround>
    </>
  );
};

export default AddCard;
