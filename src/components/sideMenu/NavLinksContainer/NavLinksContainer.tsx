import { useLogoutUser } from 'hooks/useUser/useLoginUser';
import { useRouter } from 'next/router';
import { LinksContainer } from './NavLinksContainer.style';
import { NavLink } from '../NavLink/NavLink';
import { useStepsStore } from 'store/steps';

const NavLinksContainer = () => {
  const router = useRouter();
  const { mutate } = useLogoutUser();
  const setStep = useStepsStore(state => state.setStep);

  const logout = async (args: {}) => {
    mutate(
      {}, // pass empty object as the first argument to the mutate function
      {
        onSuccess: () => {
          router.push('/');
        }
      }
    );
  };

  return (
    <>
      <LinksContainer>
        <li>
          <NavLink route="/wallet">Início</NavLink>
        </li>
        <li>
          <NavLink route="/fullactivity">Atividade</NavLink>
        </li>
        <li>
          <NavLink route="/profile">Seu perfil</NavLink>
        </li>
        <li onClick={() => setStep(0)}>
          <NavLink route="/chargevalue">Carregar valor</NavLink>
        </li>
        <li>
          <NavLink route="/payments">Pagar serviços</NavLink>
        </li>
        <li>
          <NavLink route="/cards">Cartões</NavLink>
        </li>
        <button onClick={logout}>Encerrar sessão</button>
      </LinksContainer>
    </>
  );
};

export { NavLinksContainer };
