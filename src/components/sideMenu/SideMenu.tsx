import { useRef } from 'react';
import { useWindow, WindowSize } from 'hooks/useWindow';
import { HambugerMenu, NavBar, NavInfo } from './SideMenu.styles';
import { NavLinksContainer } from './NavLinksContainer/NavLinksContainer';
import { InfoText } from 'components/Header/HeaderLogged/headerLogged.style';
import { useOnClickOutside } from 'hooks/useOnClickOutSide';

type SideMenuProps = {
  closeMenu: () => void;
  showMenu: boolean;
  name?: string;
  lastname?: string;
};

const SideMenu = ({ closeMenu, showMenu, name, lastname }: SideMenuProps) => {
  const size: WindowSize = useWindow();

  const refMenu = useRef(null);
  useOnClickOutside(refMenu, () => closeMenu());

  return (
    <>
      {size.width > 767 ? (
        <>
          <NavBar>
            <NavLinksContainer />
          </NavBar>
        </>
      ) : (
        <>
          {showMenu && (
            <NavBar ref={refMenu}>
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
