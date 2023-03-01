import { LinksContainer } from './NavLinksContainer.style';
import { NavLink } from '../NavLink/NavLink';

const NavLinksContainer = () => {
  // /api/logout
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
          <NavLink route="/cards">Cartões</NavLink>
        </li>
        <button>Encerrar sessão</button>
      </LinksContainer>
    </>
  );
};

export { NavLinksContainer };
