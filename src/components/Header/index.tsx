import * as s from './header.style';

const Header = () => {
  return (
    <s.ContainerPage>
      <div className="dmh-container">
        <img src="../../assets/images/Vector.png" />
        <img src="../../assets/images/Vector2.png" />
      </div>
      <div className="buttons-container">
        <s.ButtonLogin>Entrar</s.ButtonLogin>
        <s.ButtonCreateAccount>Criar conta</s.ButtonCreateAccount>
      </div>
    </s.ContainerPage>
  );
};

export default Header;
