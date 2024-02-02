import { prevArrowIcon } from '@/public/svgs';
import Theme from '@/styles/theme';
import Image from 'next/image';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  margin: 40px 120px 30px 120px;
  background-color: transparent;
  font-size: ${Theme.fontSize.xxlarge};
  gap: 5px;
  color: ${Theme.colors.gray400};
  cursor: pointer;

  @media screen and (max-width: ${Theme.screen.tablet}) {
    margin: 30px 45px 0px 45px;
    font-size: ${Theme.fontSize.xlarge};
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    margin: 30px 35px 0px 35px;
    font-size: ${Theme.fontSize.xlarge};
  }
`;

type Props = {
  text?: string;
  onClick: React.MouseEventHandler;
};

function GoToPrevPageButton({ text, onClick }: Props) {
  return (
    <Button onClick={onClick}>
      <Image src={prevArrowIcon} alt="icon" width="20" height="20" />
      {text}
    </Button>
  );
}
export default GoToPrevPageButton;
