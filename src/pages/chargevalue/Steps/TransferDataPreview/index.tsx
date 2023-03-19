import * as s from '../../chargevalue.styles';
import { useUserStore } from 'store/user';
import { FaEdit } from 'react-icons/fa';
import { Button } from 'components';
import * as e from './transferdatapreview.styles';
import { useGetAccount } from 'hooks/useCards/useGetAccount';
import { useStepsStore } from 'store/steps';

export function TransferDataPreview() {
  const user = useUserStore(state => state.user);
  const previousStep = useStepsStore(state => state.setPreviousStep);
  const nextStep = useStepsStore(state => state.setNextStep);
  const { data: account } = useGetAccount(user.id);

  return (
    <>
      <s.DepositValue.Container>
        <s.DepositValue.Title>Revise se está tudo correto</s.DepositValue.Title>
        <e.TransferDataPreview.Container>
          <e.TransferDataPreview.Label>
            Vai transferir
          </e.TransferDataPreview.Label>
          <e.BoldContent>$300</e.BoldContent>
          <e.TransferDataPreview.IconContainer>
            <FaEdit size={30} onClick={previousStep} />
          </e.TransferDataPreview.IconContainer>
        </e.TransferDataPreview.Container>
        <e.TransferDataPreview.Container>
          <e.TransferDataPreview.Label>Para</e.TransferDataPreview.Label>
          <e.BoldContent>Conta própria</e.BoldContent>
        </e.TransferDataPreview.Container>
        <e.TransferDataPreview.Container>
          <e.TransferDataPreview.Label>Brubank</e.TransferDataPreview.Label>
          <e.BoldContent>CVU {account?.cvu}</e.BoldContent>
        </e.TransferDataPreview.Container>
        <Button type="button" onClick={nextStep}>
          Transferir
        </Button>
      </s.DepositValue.Container>
    </>
  );
}
