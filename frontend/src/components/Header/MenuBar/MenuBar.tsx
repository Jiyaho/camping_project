import { useEffect, useRef, useState } from 'react';
import { Container, StyledLink } from './MenuBar.style';
import { useRecoilState } from 'recoil';
import { userAtom } from '@/atoms/user';
import { userData } from '@/constants/user';

export default function MenuBar() {
  const [isAuth, setIsAuth] = useRecoilState(userAtom);
  const [login, setLogin] = useState(false);

  const menuBarRef = useRef<HTMLDialogElement>(null);
  const handleOutsideClick = ({ target }: MouseEvent) => {
    if (target === null) {
      return;
    }

    if (!menuBarRef.current?.contains(target as Node)) {
      setLogin(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleOutsideClick);

    return () => document.removeEventListener('mouseup', handleOutsideClick);
  });
  return (
    <Container>
      {!login && !isAuth.isAuth ? (
        <div>
          <p>
            <StyledLink href={'/login'}>로그인</StyledLink>
          </p>
          <p>
            <StyledLink href={'/board'}>게시판</StyledLink>
          </p>
          <p>
            <StyledLink href={'/'}>스토어</StyledLink>
          </p>
        </div>
      ) : (
        <div>
          <p>
            <StyledLink href={'/logout'}>로그아웃</StyledLink>
          </p>
          <p>
            <StyledLink href={'/mypage'}>마이페이지</StyledLink>
          </p>
          <p>
            <StyledLink href={'/board'}>게시판</StyledLink>
          </p>
          <p>
            <StyledLink href={'/'}>스토어</StyledLink>
          </p>
        </div>
      )}
    </Container>
  );
}
