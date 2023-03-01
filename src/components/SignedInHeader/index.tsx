import Link from 'next/link';
import { UserData } from 'pages/home/types';
import { useEffect, useState } from 'react';
import * as s from './SignedInHeader.style';

const SignedInHeader = () => {
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      setUserData(JSON.parse(localStorage.getItem('userData') || '{}'));
      setLoading(false);
    }
  }, [loading, userData]);

  return (
    <s.ContainerPage>
      {!loading && (
        <>
          <div className="dmh-container">
            <Link href="/">
              <img src="../../assets/images/Vector.png" />
              <img src="../../assets/images/Vector2.png" />
            </Link>
          </div>
          <s.UserContainer>
            <s.UserInitials>
              <div>
                <p>{userData?.firstname?.split('')[0]}</p>
                <p> {userData?.lastname?.split('')[0]}</p>
              </div>
            </s.UserInitials>
            <s.UserGreetings>
              Olá, {userData?.firstname}&nbsp;{userData?.lastname}
            </s.UserGreetings>
          </s.UserContainer>
        </>
      )}
    </s.ContainerPage>
  );
};

export default SignedInHeader;
