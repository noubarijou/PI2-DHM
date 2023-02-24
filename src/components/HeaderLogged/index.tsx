import Link from 'next/link';
import * as s from './headerLogged.style';

const HeaderLogged = () => {
  return (
    <s.ContainerPage>
      <div className="dmh-container">
        <Link href="/">
          <img src="../../assets/images/Vector4.png" />
          <img src="../../assets/images/Vector3.png" />
        </Link>
      </div>
    </s.ContainerPage>
  );
};

export default HeaderLogged;
