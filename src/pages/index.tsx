import type { GetServerSidePropsContext, NextPage } from 'next';
import HomePage from './home';
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

const Home: NextPage = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
