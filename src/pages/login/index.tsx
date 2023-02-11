import { Button } from 'components';
import { InputText } from 'components/input/input-text/input-text.styles';
import { FormEvent, useState } from 'react';
import * as s from './login.style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageError, setMessageError] = useState(
    'Usuário não encontrado, tente novamente'
  );
  const [logged, setLogged] = useState(false);

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setLogged(true);
  };

  return (
    <s.ContainerPage>
      <s.ContainerLogin onSubmit={onSubmitForm}>
        <s.Title>
          {!logged ? 'Olá Digite seu e-mail' : 'Digite sua senha'}
        </s.Title>
        {!logged ? (
          <InputText
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
            variant={'outOfFocus'}
            name="email"
          />
        ) : (
          <InputText
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="senha"
            variant={'outOfFocus'}
            name="password"
          />
        )}
        <Button variant="primary">Confirmar</Button>
        {!logged && <Button variant="tertiary">Criar conta</Button>}
        {messageError && <s.MessageError>{messageError}</s.MessageError>}
      </s.ContainerLogin>
    </s.ContainerPage>
  );
};

export default Login;
