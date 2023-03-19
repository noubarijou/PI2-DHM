import * as s from '../../chargevalue.styles';
import { InputText } from 'components/input/input-text/InputText';
import { Button } from 'components';
import { useForm } from 'react-hook-form';
import { useStepsStore } from 'store/steps';

export function DepositValue() {
  const { control, watch } = useForm<{ value: string }>({
    defaultValues: {
      value: ''
    }
  });
  const nextStep = useStepsStore(state => state.setNextStep);
  const currentInputValue = watch('value');
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
        />
        <Button
          type="button"
          variant={!currentInputValue ? 'disabled' : 'primary'}
          onClick={nextStep}
        >
          Continuar
        </Button>
      </s.DepositValue.Container>
    </>
  );
}
