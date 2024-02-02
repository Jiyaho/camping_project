import Theme from '@/styles/theme';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 20px auto;
`;

export const LogoButtonWrap = styled.div`
  cursor: pointer;
`;

export const ProfileMenuWrap = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;
