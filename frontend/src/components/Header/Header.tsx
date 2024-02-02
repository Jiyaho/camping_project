'use client';

import { Logo } from '../common/Logo';
import { SearchBar } from './SearchBar';
import { MenuIcon } from '@/public/svgs';
import Image from 'next/image';
import { useState } from 'react';
import MenuBar from './MenuBar';
import * as Styled from './Header.style';
import Profile from './Profile';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.HeaderContainer>
      {/* 메인 화면으로 이동 시 전역 상태 초기화를 위해 Link 컴포넌트에서 새로고침으로 변경 적용 */}
      <Styled.LogoButtonWrap onClick={() => (window.location.href = '/')}>
        <Logo />
      </Styled.LogoButtonWrap>
      <SearchBar />
      <div style={{ width: '10%', position: 'relative' }}>
        <Styled.ProfileMenuWrap>
          <Image
            style={{ width: '30px', cursor: 'pointer' }}
            onClick={openMenuBar}
            src={MenuIcon}
            alt="menu"
          />
          <Profile />
        </Styled.ProfileMenuWrap>
        {isOpen && <MenuBar />}
      </div>
    </Styled.HeaderContainer>
  );
}
