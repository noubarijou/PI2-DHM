import {
  HambugerMenu,
  Header,
  HeaderInfo,
  InfoText,
  NavBar,
  NavInfo
} from './SideMenu.styles';
import { useWindow, WindowSize } from 'hooks/useWindow';
import { useState } from 'react';
import { NavLinksContainer } from './NavLinksContainer/NavLinksContainer';
import Link from 'next/link';

const SideMenu = () => {
  const size: WindowSize = useWindow();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      {size.width > 834 ? (
        <>
          <Header>
            <Link href="/" className="headerLogo">
              <img
                src="../../assets/images/LOGO-DMH-green.png"
                alt="green logo digital money house"
              />
            </Link>
            <HeaderInfo>
              <p className="alias">MB</p>
              <InfoText className="headerText">Olá, Maurício Brito</InfoText>
            </HeaderInfo>
          </Header>
          <NavBar>
            <NavLinksContainer />
          </NavBar>
        </>
      ) : (
        <>
          <Header>
            <Link href="/" className="headerLogo">
              <img
                src="../../assets/images/LOGO-DMH-green.png"
                alt="green logo digital money house"
              />
            </Link>
            <HeaderInfo>
              <p className="alias">MB</p>
              <HambugerMenu className="openBtn" onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
              </HambugerMenu>
            </HeaderInfo>
          </Header>
          {showMenu ? (
            <NavBar>
              <NavInfo>
                <HambugerMenu className="closeBtn" onClick={closeMenu}>
                  <span></span>
                  <span></span>
                </HambugerMenu>
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
