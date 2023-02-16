import { Button } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as s from './login.style';
import Footer from 'components/footer';
import HeaderLogged from 'components/HeaderLogged';
import { InputText } from 'components/input/input-text/InputText';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schemaLogin } from './schemas';
import { LoginPayload } from 'hooks/useUser/useLoginUser/types';
import { useLoginUser } from 'hooks/useUser/useLoginUser';

const messageErrors = {
  'invalid credentials': 'Senha invalida',
  'user not found': 'usuario não encontrado'
};

type ErrorKey = keyof typeof messageErrors;

const Login = () => {
  const [stepEmailCompleted, setStepEmailCompleted] = useState(false);
  const { mutate: loginUser, isLoading } = useLoginUser();
  const [messageError, setMessageError] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all'
  });

  const handleLogin: SubmitHandler<LoginPayload> = dataForm => {
    if (!errors.email && !stepEmailCompleted) {
      setStepEmailCompleted(true);
      return;
    }

    if (!dataForm.password) {
      return setError('password', {
        type: 'required',
        message: 'Campo obrigatório'
      });
    }
    // token é recebido, falta saber o que faremos com ele
    loginUser(dataForm, {
      onSuccess: res => console.log(res?.token),
      onError: err => {
        let mesErr = err as ErrorKey;
        setMessageError(messageErrors[mesErr]);
      }
    });
  };

  const resetMessageError = () => {
    if (messageError) setMessageError('');
  };

  return (
    <>
      <HeaderLogged />
      <s.ContainerPage>
        <s.ContainerLogin onSubmit={handleSubmit(handleLogin)}>
          <s.Title key="title">
            {!stepEmailCompleted ? 'Olá Digite seu e-mail' : 'Digite sua senha'}
          </s.Title>
          {!stepEmailCompleted ? (
            <InputText
              key="email"
              type="email"
              name="email"
              control={control}
              placeholder="email"
              variant={'outOfFocus'}
            />
          ) : (
            <InputText
              onKeyDown={resetMessageError}
              key="password"
              type="password"
              name="password"
              control={control}
              placeholder="senha"
              variant={'outOfFocus'}
            />
          )}
          <Button type="submit" variant={!isLoading ? 'primary' : 'disabled'}>
            Confirmar
          </Button>
          {!stepEmailCompleted && (
            <Button variant="tertiary">Criar conta</Button>
          )}
          {messageError && <s.MessageError>{messageError}</s.MessageError>}
        </s.ContainerLogin>
      </s.ContainerPage>
      <Footer />
    </>
  );
};

export default Login;
