import { HambugerMenu, NavBar, NavInfo } from './SideMenu.styles';
import { NavLinksContainer } from './NavLinksContainer/NavLinksContainer';
import { useWindow, WindowSize } from 'hooks/useWindow';
import { InfoText } from 'components/Header/HeaderLogged/headerLogged.style';

type SideMenuProps = {
  closeMenu: () => void;
  showMenu: boolean;
  name?: string;
  lastname?: string;
};

const SideMenu = ({ closeMenu, showMenu, name, lastname }: SideMenuProps) => {
  const size: WindowSize = useWindow();

  return (
    <>
      {size.width > 833 ? (
        <>
          <NavBar>
            <NavLinksContainer />
          </NavBar>
        </>
      ) : (
        <>
          {showMenu && (
            <NavBar>
              <NavInfo>
                <HambugerMenu className="closeBtn" onClick={closeMenu}>
                  <span></span>
                  <span></span>
                </HambugerMenu>
                <div>
                  <InfoText>Olá,</InfoText>
                  <InfoText>{`${name} ${lastname}`}</InfoText>
                </div>
              </NavInfo>
              <NavLinksContainer />
            </NavBar>
          )}
        </>
      )}
    </>
  );
};
export { SideMenu };
