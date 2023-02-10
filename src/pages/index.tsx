import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Button } from 'components';
import { Input } from 'components/';

const Home: NextPage = () => {
  return (
    <>
      <Button variant="secondary" />
      <Input.InputText type="text" name="name" />
    </>
  );
};

export default Home;
