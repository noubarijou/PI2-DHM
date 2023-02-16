import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from './home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="shortcut icon"
          href="/assets/images/LOGO-DMH-green.png"
          type="image/png"
        />
      </Head>

      <HomePage />
    </>
  );
};

export default Home;
