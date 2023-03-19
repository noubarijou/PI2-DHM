import { ContainerPage } from 'components';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import nookies from 'nookies';
import { useStepsStore } from 'store/steps';

import { DepositValue } from './Steps/DepositValue';
import { TransferDataPreview } from './Steps/TransferDataPreview';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { '@digitalmoney:token': token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      },
      props: {}
    };
  }

  return {
    props: {}
  };
}

const ChargeValue = () => {
  const currentStep = useStepsStore(state => state.step);

  const Steps = {
    0: <DepositValue />,
    1: <TransferDataPreview />
  };

  const component = Steps[currentStep as keyof typeof Steps];
  return (
    <>
      <Head>
        <title>DMH | Carregar valor</title>
      </Head>
      <ContainerPage>{component}</ContainerPage>
    </>
  );
};

export default ChargeValue;
