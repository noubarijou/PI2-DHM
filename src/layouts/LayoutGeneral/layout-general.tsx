import { Footer, Header } from 'components';
import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

const LayoutGeneral: FC<PropsWithChildren> = ({
  children
}: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Digital Money House</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default LayoutGeneral;
