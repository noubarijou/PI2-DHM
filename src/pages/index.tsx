import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from './home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Digital Money House</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
