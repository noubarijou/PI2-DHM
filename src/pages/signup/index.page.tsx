import { Button } from 'components';
import { InputText } from 'components/input/input-text/InputText';
import { useState } from 'react';
import { SignedUp } from 'layouts/SignUp/SignedUp';

import { yupResolver } from '@hookform/resolvers/yup';
import * as s from './signup.style';
import { schema } from './schemas';
import { SignUpPayload } from 'hooks/useUser/useCreateUser/types';
import { usePostUser } from 'hooks/useUser/useCreateUser';
import { SubmitHandler, useForm } from 'react-hook-form';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { '@digitalmoney:token': token } = nookies.get(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/wallet',
        permanent: false
      },
      props: {}
    };
  }

  return {
    props: {}
  };
}

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
      <Head>
        <title>DMH | Cadastro</title>
      </Head>
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
              label="Nome"
            />
            <InputText
              type="text"
              name="lastname"
              control={control}
              placeholder="Sobrenome*"
              label="Sobrenome"
            />
            <InputText
              type="text"
              name="dni"
              control={control}
              placeholder="CPF*"
              label="CPF"
              maxLength={11}
              minLength={11}
            />
            <InputText
              type="text"
              name="email"
              control={control}
              placeholder="E-mail*"
              label="E-mail"
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
              label="Senha"
              minLength={6}
            />
            <InputText
              type="password"
              name="confirmPassword"
              control={control}
              placeholder="Confirmar senha"
              label="Confirmar senha"
            />
            <InputText
              type="text"
              name="phone"
              control={control}
              placeholder="Telefone*"
              label="Telefone"
              minLength={11}
              maxLength={11}
            />
            <Button type="submit" size="medium">
              {isLoading ? 'Carregando...' : 'Criar conta'}
            </Button>
          </s.Form>
        )}
      </s.FormContainer>
    </>
  );
};

export default Signup;
