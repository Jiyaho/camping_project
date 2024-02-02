import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Container = styled.section`
  width: 80vw;
  margin: auto;
  border: 1px solid ${Theme.colors.gray200};
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0px 0px 5px 0px ${Theme.colors.gray200};
  @media screen and (max-width: ${Theme.screen.tablet}) {
    padding: 20px;
    width: 85vw;
  }
  @media screen and (max-width: ${Theme.screen.mobile}) {
    padding: 20px;
    width: 85vw;
  }
`;

export const BasicPriceWrap = styled.div`
  padding-bottom: 20px;
  span {
    font-size: ${Theme.fontSize.large};
  }
  span:nth-child(2) {
    color: ${Theme.colors.gray300};
  }
`;

export const OptionsContainer = styled.div`
  color: ${Theme.colors.gray400};
  border-radius: 20px;
  border: 1px solid ${Theme.colors.gray200};
`;

export const DateWrap = styled.div`
  display: flex;
`;
export const DateBox = styled.div<{ $open: boolean }>`
  display: flex;
  padding: 20px;
  width: 50%;

  ul {
    font-weight: ${(props) => (props.$open ? 'bold' : 'none')};
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
  }
  ul:nth-child(2) {
    border-left: 1px solid ${Theme.colors.gray200};
    padding-left: 15px;
    margin: auto;
  }
  li {
    padding: 2px;
    font-size: ${Theme.fontSize.large};
  }
  li:nth-child(2) {
    padding-top: 8px;
    font-size: ${Theme.fontSize.medium};
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    li {
      padding: 2px;
      font-size: ${Theme.fontSize.medium};
    }
    li:nth-child(2) {
      padding-top: 6px;
      font-size: ${Theme.fontSize.small};
    }
  }
`;

export const ReserveButton = styled.div`
  width: 97%;
  display: flex;
  text-decoration: none;
  color: ${Theme.colors.gray500};
  align-items: center;
  justify-content: center;
  font-size: ${Theme.fontSize.large};
  border-radius: 15px;
  height: 50px;
  margin: auto;
  background-color: ${Theme.colors.orange300};
  margin-bottom: 15px;
  cursor: pointer;
  @media screen and (max-width: ${Theme.screen.tablet}) {
    width: 93%;
  }
  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 90%;
  }
`;

export const TextWrap = styled.div`
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 5px;
  width: 100%;
  text-align: center;
  span {
    font-size: ${Theme.fontSize.medium};
    color: ${Theme.colors.gray350};
  }
  ul {
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    font-size: ${Theme.fontSize.large};
    li {
      padding-top: 5px;
    }
  }
  ul:nth-child(2) {
    padding-bottom: 15px;
    border-bottom: 1px solid ${Theme.colors.gray200};
    color: ${Theme.colors.gray400};
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    span {
      font-size: ${Theme.fontSize.small};
    }
    ul {
      font-size: ${Theme.fontSize.medium};
    }
  }
`;
