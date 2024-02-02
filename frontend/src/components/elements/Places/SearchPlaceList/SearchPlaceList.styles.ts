import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Container = styled.main`
  margin-top: 55px;
`;

export const ContentBox = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 25px;

  a {
    text-decoration: none;
  }
`;

export const ImageWrap = styled.div`
  width: 275px;
  height: 275px;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  @media screen and (max-width: ${Theme.screen.tablet}) {
    width: 450px;
    height: 450px;
  }
  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 370px;
    height: 370px;
  }
`;

export const HeartIcon = styled.div<{ $isHeartClick: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${(props) => (props.$isHeartClick ? 'red' : 'rgba(0, 0, 0, 0.5)')};
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  font-size: 30px;
  -webkit-text-stroke: 1px ${Theme.colors.white};
  &:hover {
    color: #ff5858;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${Theme.colors.black};
  font-weight: 600;
  margin-top: 18px;
  margin-bottom: 10px;
`;

export const PriceWrap = styled.div`
  color: ${Theme.colors.gray500};
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
  p:nth-child(2) {
    font-weight: bold;
  }
`;
