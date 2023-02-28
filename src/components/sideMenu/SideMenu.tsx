import {
  InfoText,
  MenuHambuger,
  NavBar,
  NavInfo,
  NavLink,
  NavLinksContainer
} from './SideMenu.styles';

const SideMenu = () => {
  return (
    <>
      <NavBar>
        <NavInfo>
          <MenuHambuger className="is-active">
            <span></span>
            <span></span>
          </MenuHambuger>
          <div>
            <InfoText>Olá,</InfoText>
            <InfoText>Mauricio Brito</InfoText>
          </div>
        </NavInfo>
        <NavLinksContainer>
          <li>
            <NavLink href="/wallet" className="active">
              Início
            </NavLink>
          </li>
          <li>
            <NavLink href="/activity">Atividade</NavLink>
          </li>
          <li>
            <NavLink href="/profile">Seu perfil</NavLink>
          </li>
          <li>
            <NavLink href="/value">Carregar valor</NavLink>
          </li>
          <li>
            <NavLink href="/service">Pagar serviços</NavLink>
          </li>
          <li>
            <NavLink href="/card">Cartões</NavLink>
          </li>
          <button>Encerrar sessão</button>
        </NavLinksContainer>
      </NavBar>
    </>
  );
};

export { SideMenu };
