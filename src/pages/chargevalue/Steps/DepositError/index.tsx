import * as e from './depositError.styles';
import { Button } from 'components';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStepsStore } from 'store/steps';

export function DepositError() {
  const setStep = useStepsStore(state => state.setStep);

  return (
    <>
      <e.DepositValueError>
        <TiDeleteOutline size={75} color={'#FF0000'} />
        <e.Amount>Houve um problema com seu pagamento</e.Amount>
        <div className="divider"></div>
        <e.Span>
          Pode ser devido a saldo insuficiente. Entre em contato com a empresa
          administradora de seu cartão.
        </e.Span>
      </e.DepositValueError>
      <e.ButtonContainer>
        <Button variant="primary" onClick={() => setStep(0)}>
          Tentar novamente
        </Button>
      </e.ButtonContainer>
    </>
  );
}
