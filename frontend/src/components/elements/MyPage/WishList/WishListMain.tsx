'use client';
import useSWR from 'swr';
import * as Styled from './WishListMain.styles';
import WishPlaceImages from './ImagesContainer/WishPlaceImages';
import WishItemImages from './ImagesContainer/WishItemImages';
import { WISH_ITEM_END_POINT, WISH_PLACE_END_POINT } from '@/constants/api';
import GoToPrevPageButton from '@/components/common/Button/GoToPrevPageButton';
import { useRouter } from 'next/navigation';

function WishListMain() {
  const router = useRouter();

  const {
    data: placeDate,
    isLoading: isPlaceLoading,
    error: placeError,
  } = useSWR(WISH_PLACE_END_POINT.WISH_PLACE());

  const {
    data: ItemData,
    isLoading: isItemLoading,
    error: itemError,
  } = useSWR(WISH_ITEM_END_POINT.WISH_ITEM());

  if (placeError) {
    console.log('Place Data Fetch Error: ' + placeError);
    return <div>Error fetching wish places.</div>;
  }

  if (itemError) {
    console.log('Item Data Fetch Error: ' + itemError);
    return <div>Error fetching wish items.</div>;
  }
  if (isPlaceLoading || isItemLoading) return <div>Loading...</div>;

  return (
    <Styled.Main>
      <GoToPrevPageButton text="예약 내역" onClick={() => router.push('/mypage')} />

      <p>최근 6개월 간의 찜한 내역이 표시됩니다.</p>
      <WishPlaceImages data={placeDate} />
      <h2>찜한 아이템</h2>
      <p>최근 6개월 간의 찜한 아이템이 표시됩니다.</p>
      <WishItemImages data={ItemData} />
    </Styled.Main>
  );
}
export default WishListMain;
