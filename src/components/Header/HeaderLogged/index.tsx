import { SideMenu } from 'components/sideMenu/SideMenu';
import { HambugerMenu } from 'components/sideMenu/SideMenu.styles';
import { useWindow, WindowSize } from 'hooks/useWindow';
import Link from 'next/link';
import { UserData } from 'pages/home/types';
import { useEffect, useState } from 'react';
import * as s from './headerLogged.style';

const HeaderLogged = () => {
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState(false);
  const size: WindowSize = useWindow();

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (loading) {
      setUserData(JSON.parse(localStorage.getItem('userData') || '{}'));
      setLoading(false);
    }
  }, [loading, userData]);

  return (
    <>
      {!loading && (
        <>
          <s.Header>
            <div className="headerLogo">
              <Link href="/">
                <img
                  src="../../assets/images/LOGO-DMH.png"
                  alt="green logo digital money house"
                />
              </Link>
            </div>
            {userData?.token && (
              <>
                <s.HeaderInfo>
                  <p className="alias">
                    {userData?.firstname?.split('')[0]}
                    {userData?.lastname?.split('')[0]}
                  </p>
                  {size.width > 833 ? (
                    <>
                      <s.InfoText className="headerText">
                        Olá, {userData?.firstname}&nbsp;{userData?.lastname}
                      </s.InfoText>
                    </>
                  ) : (
                    <>
                      <HambugerMenu className="openBtn" onClick={openMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </HambugerMenu>
                    </>
                  )}
                </s.HeaderInfo>
                <SideMenu
                  closeMenu={closeMenu}
                  showMenu={showMenu}
                  name={userData.firstname}
                  lastname={userData.lastname}
                />
              </>
            )}
          </s.Header>
        </>
      )}
    </>
  );
};

export { HeaderLogged };
