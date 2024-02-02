'use client';

import styled from 'styled-components';
import Theme from '@/styles/theme';

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 130px 30px 130px;
  h1 {
    font-size: ${Theme.fontSize.xxlarge};
    color: ${Theme.colors.gray400};
  }
`;

function PageTitle({ title }: { title: string }) {
  return (
    <TitleWrap>
      <h1>{title}</h1>
    </TitleWrap>
  );
}
export default PageTitle;
