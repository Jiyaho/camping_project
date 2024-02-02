import styled from 'styled-components';
import Theme from '@/styles/theme';

export const ProfileBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  margin: auto;
  align-items: center;
  span {
    font-size: ${Theme.fontSize.xxlarge};
  }
`;
