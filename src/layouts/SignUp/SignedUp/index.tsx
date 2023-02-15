import { Button } from 'components';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { useTheme } from 'styled-components';

import * as s from './signedup.style';

export function SignedUp() {
  const {
    colors: { primary }
  } = useTheme();

  return (
    <s.Container>
      <s.Title>Cadastro realizado</s.Title>
      <IoIosCheckmarkCircleOutline size={90} color={primary} />
      <s.Message>
        Enviamos uma mensagem de confirmação para seu e-mail, por favor acesse e
        siga as instruções para iniciar a sessão.
      </s.Message>
      <Button type="button">Continuar</Button>
    </s.Container>
  );
}
