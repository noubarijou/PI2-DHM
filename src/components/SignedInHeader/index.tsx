import Link from 'next/link';
import * as s from './SignedInHeader.style';

const SignedInHeader = () => {
  return (
    <s.ContainerPage>
      <div className="dmh-container">
        <Link href="/">
          <img src="../../assets/images/Vector.png" />
          <img src="../../assets/images/Vector2.png" />
        </Link>
      </div>
      <div className="buttons-container">
        <Link href="/">
          <s.ButtonProfile>NC</s.ButtonProfile>
        </Link>
      </div>
    </s.ContainerPage>
  );
};

export default SignedInHeader;
