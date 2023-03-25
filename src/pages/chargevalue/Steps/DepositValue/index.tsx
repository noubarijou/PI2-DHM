import * as s from '../../chargevalue.styles';
import { InputText } from 'components/input/input-text/InputText';
import { Button } from 'components';
import { useForm } from 'react-hook-form';
import { useStepsStore } from 'store/steps';
import { ChangeEvent } from 'react';
import { formatCurrency } from 'utils/tests/formatters/formatCurrency';
import { useChargeValueStore } from 'store/chargevalue';

export function DepositValue() {
  const { control, watch, setValue, register } = useForm<{
    value: string;
  }>({
    defaultValues: {
      value: ''
    }
  });

  const nextStep = useStepsStore(state => state.setNextStep);
  const setChargeValue = useChargeValueStore(state => state.setChargeValue);

  const currentInputValue = watch('value');

  const handleChargeValue = () => {
    setChargeValue(
      Number(currentInputValue.slice(1, currentInputValue.length))
    );
    nextStep();
  };

  return (
    <>
      <s.DepositValue.Container>
        <s.DepositValue.Title>
          Quanto deseja depositar na sua conta?
        </s.DepositValue.Title>
        <InputText
          type="text"
          name="value"
          placeholder="$0"
          control={control}
          {...(register('value'),
          {
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              setValue('value', formatCurrency(e.target.value));
            }
          })}
        />
        <Button
          type="button"
          variant={!currentInputValue ? 'disabled' : 'primary'}
          onClick={handleChargeValue}
        >
          Continuar
        </Button>
      </s.DepositValue.Container>
    </>
  );
}
