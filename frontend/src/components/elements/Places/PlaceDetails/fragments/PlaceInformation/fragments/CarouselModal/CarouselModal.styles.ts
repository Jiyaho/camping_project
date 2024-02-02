import styled, { keyframes } from 'styled-components';
import Theme from '@/styles/theme';

export const CarouselModalBox = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* 세로 스크롤바 활성화 */
  max-height: 100%; /* 내용이 모두 표시되도록 최대 높이 설정 */
`;

export const CarouselModalContent = styled.section`
  display: block;
  width: 65vw;
  margin: auto;
  margin-top: 50px;
  .close_button {
    border: none;
    margin-top: 10px;
    background-color: transparent;
    font-size: ${Theme.fontSize.large};
    color: ${Theme.colors.gray400};
    cursor: pointer;
  }
  @media screen and (max-width: ${Theme.screen.pc}) {
    margin-top: 10px;
    width: 100vw;
    margin-left: 0px;
    .close_button {
      margin-left: 45px;
      margin-top: 50px;
    }
  }
  @media screen and (max-width: ${Theme.screen.mobile}) {
    margin-top: 10px;
    width: 100vw;
    margin-left: 0px;
    .close_button {
      margin-left: 45px;
      margin-top: 50px;
    }
  }
`;

export const ImageIndex = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  button {
    border: none;
    background-color: transparent;
    width: 70px;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(80%);
  }
  .embla_slide {
    margin: auto;
    width: 50vw;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    margin: auto;
  }

  @media screen and (max-width: ${Theme.screen.pc}) {
    width: 95%;
    .embla_slide {
      width: 100%;
    }
  }
  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 100%;
    .embla_slide {
      width: 100%;
    }
    button {
      /* display: none; */
    }
  }
`;
