import { LinksContainer } from '../SideMenu.styles';
import { NavLink } from '../NavLink/NavLink';

const NavLinksContainer = () => {
  return (
    <>
      <LinksContainer>
        <li>
          <NavLink route="/wallet">Início</NavLink>
        </li>
        <li>
          <NavLink route="/activity">Atividade</NavLink>
        </li>
        <li>
          <NavLink route="/profile">Seu perfil</NavLink>
        </li>
        <li>
          <NavLink route="/value">Carregar valor</NavLink>
        </li>
        <li>
          <NavLink route="/service">Pagar serviços</NavLink>
        </li>
        <li>
          <NavLink route="/card">Cartões</NavLink>
        </li>
        <button>Encerrar sessão</button>
      </LinksContainer>
    </>
  );
};

export { NavLinksContainer };
