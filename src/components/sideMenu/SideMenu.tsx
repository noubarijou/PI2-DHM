import {
  CloseMenu,
  InfoText,
  MenuHambuger,
  NavBar,
  NavInfo
} from './SideMenu.styles';
import { useWindow, WindowSize } from 'hooks/useWindow';
import { useState } from 'react';
import { NavLinksContainer } from './NavLinksContainer/NavsLinksContainer';

const SideMenu = () => {
  const size: WindowSize = useWindow();
  const [showMenu, setShowMenu] = useState(true);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      {size.width > 834 ? (
        <NavBar>
          <NavLinksContainer />
        </NavBar>
      ) : (
        <>
          <MenuHambuger>
            <span></span>
            <span></span>
            <span></span>
          </MenuHambuger>
          {showMenu ? (
            <NavBar>
              <NavInfo>
                <CloseMenu onClick={closeMenu}>
                  <span></span>
                  <span></span>
                </CloseMenu>
                <div>
                  <InfoText>Olá,</InfoText>
                  <InfoText>Mauricio Brito</InfoText>
                </div>
              </NavInfo>
              <NavLinksContainer />
            </NavBar>
          ) : null}
        </>
      )}
    </>
  );
};
export { SideMenu };
