import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Button } from 'components';
import { Input } from 'components/';
import { InputText } from 'components/input/input-text/input-text.styles';

const Home: NextPage = () => {
  return (
    <>
      <Button variant="secondary" />
      <InputText />
      {/* <Input /> */}
    </>
  );
};

export default Home;
