import { Footer, Header } from 'components';
import { FC, PropsWithChildren } from 'react';

const LayoutGeneral: FC<PropsWithChildren> = ({
  children
}: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default LayoutGeneral;
