import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Container = styled.article`
  width: 80vw;
  margin: auto;
`;

export const Ul = styled.ul`
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  li:nth-child(1),
  li:nth-child(2) {
    color: ${Theme.colors.gray500};
  }
  li:nth-child(1) {
    margin-top: 10px;
    font-size: ${Theme.fontSize.xxlarge};
    font-weight: bold;
  }
  li:nth-child(2) {
    font-size: ${Theme.fontSize.large};
  }
  li:nth-child(3) {
    color: ${Theme.colors.gray400};
    line-height: 1.6;
  }

  @media screen and (max-width: ${Theme.screen.pc}) {
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    margin-top: 0px;
  }
`;
