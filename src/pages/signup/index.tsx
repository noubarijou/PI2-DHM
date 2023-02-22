import { Button } from 'components';
import { InputText } from 'components/input/input-text/InputText';
import { useState } from 'react';
import { SignedUp } from 'layouts/SignUp/SignedUp';

import HeaderLogged from '../../components/HeaderLogged';
import Footer from '../../components/footer';

import { yupResolver } from '@hookform/resolvers/yup';
import * as s from './signup.style';
import { schema } from './schemas';
import { SignUpPayload } from 'hooks/useUser/useCreateUser/types';
import { usePostUser } from 'hooks/useUser/useCreateUser';
import { SubmitHandler, useForm } from 'react-hook-form';

const Signup = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const { mutate: postUser, isLoading } = usePostUser();
  const { control, handleSubmit } = useForm<SignUpPayload>({
    defaultValues: {
      firstname: '',
      lastname: '',
      dni: 0,
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    },
    resolver: yupResolver(schema)
  });
  const handleSignUp: SubmitHandler<SignUpPayload> = async data => {
    const { confirmPassword, ...user } = data;
    const response = postUser(user, {
      onSuccess: () => {
        setIsSignedUp(prevState => !prevState);
      },
      onError: e => console.log(e)
    });
    console.log(response);
  };

  return (
    <>
      <HeaderLogged />
      <s.FormContainer>
        {isSignedUp ? (
          <SignedUp />
        ) : (
          <s.Form onSubmit={handleSubmit(handleSignUp)}>
            <s.FormTitle>Criar conta</s.FormTitle>
            <InputText
              type="text"
              name="firstname"
              control={control}
              placeholder="Nome*"
            />
            <InputText
              type="text"
              name="lastname"
              control={control}
              placeholder="Sobrenome*"
            />
            <InputText
              type="text"
              name="dni"
              control={control}
              placeholder="CPF*"
            />
            <InputText
              type="text"
              name="email"
              control={control}
              placeholder="E-mail*"
            />
            <s.Text>
              Use entre 6 e 20 caracteres (deve conter pelo menos 1 caractere
              especial, uma letra maiúscula e um número)
            </s.Text>
            <InputText
              type="password"
              name="password"
              control={control}
              placeholder="Senha"
            />
            <InputText
              type="password"
              name="confirmPassword"
              control={control}
              placeholder="Confirmar senha"
            />
            <InputText
              type="text"
              name="phone"
              control={control}
              placeholder="Telefone*"
            />
            <Button type="submit">
              {isLoading ? 'Carregando...' : 'Criar conta'}
            </Button>
          </s.Form>
        )}
      </s.FormContainer>
      <Footer />
    </>
  );
};

export default Signup;
