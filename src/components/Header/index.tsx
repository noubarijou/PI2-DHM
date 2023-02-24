import Link from 'next/link';
import * as s from './header.style';

const Header = () => {
  return (
    <s.ContainerPage>
      <div className="dmh-container">
        <Link href="/">
          <img src="../../assets/images/Vector.png" />
          <img src="../../assets/images/Vector2.png" />
        </Link>
      </div>
      <div className="buttons-container">
        <Link href="/login">
          <s.ButtonLogin>Entrar</s.ButtonLogin>
        </Link>
        <Link href="signup">
          <s.ButtonCreateAccount>Criar conta</s.ButtonCreateAccount>
        </Link>
      </div>
    </s.ContainerPage>
  );
};

export default Header;
