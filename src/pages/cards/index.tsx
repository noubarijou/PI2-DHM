import { ContainerPage, SideMenu } from 'components';
import Footer from 'components/footer';
import Head from 'next/head';

const Cards = () => {
  return (
    <>
      <Head>
        <title>DMH | Cards</title>
      </Head>
      <SideMenu />
      <ContainerPage></ContainerPage>
      <Footer />
    </>
  );
};

export default Cards;
