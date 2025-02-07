import styled, { keyframes } from 'styled-components';
import Theme from '@/styles/theme';

export const ModalBox = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; // 세로 스크롤바 활성화
  max-height: 100%; // 내용이 모두 표시되도록 최대 높이 설정
`;

export const ModalContent = styled.div`
  width: 65vw;
  margin: auto;
  margin-bottom: 50px;
  button {
    .prev_icon {
      margin-right: 5px;
    }
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: ${Theme.fontSize.large};
    color: ${Theme.colors.gray400};
    margin-bottom: 15px;
    margin-top: 50px;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .image_wrap {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
    img:hover {
      filter: brightness(80%);
    }
  }

  @media screen and (max-width: ${Theme.screen.pc}) {
    width: 85vw;
    .image-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 85vw;
    margin-bottom: 20px;
    .image-grid {
      grid-template-columns: 1fr;
      margin-left: -20px;
    }
    button {
      margin-top: 25px;
    }
  }
`;
