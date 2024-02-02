import Image from 'next/image';
import * as Styled from './ScheduleDetails.styles';
import { placeSampleImg1 } from '@/public/svgs';
import { useRecoilValue } from 'recoil';
import { periodSelector, searchPlaceAtom, selectedPlaceAtom } from '@/atoms/place';

function ScheduleDetails() {
  const selectedPlaceData = useRecoilValue(selectedPlaceAtom);
  const searchValues = useRecoilValue(searchPlaceAtom);
  const period = useRecoilValue(periodSelector);
  const totalCount =
    Number(searchValues.adultNumber) +
    Number(searchValues.teenNumber) +
    Number(searchValues.childNumber) +
    Number(searchValues.petNumber);

  return (
    <Styled.Container>
      <Styled.CampsiteInfoWrap>
        <div>
          <Image src={placeSampleImg1} alt="placeImage" width={90} height={90} />
        </div>
        <ul>
          <li>{selectedPlaceData.placeName}</li>
          <li>{selectedPlaceData.campSite}</li>
          <li>기준인원: {totalCount}명</li>
        </ul>
      </Styled.CampsiteInfoWrap>
      <Styled.PeriodWrap>
        <ul>
          <li>체크인</li>
          <li>{searchValues.checkIn}</li>
          <li>오후 02:00</li>
        </ul>
        <span>2박</span>
        <ul>
          <li>체크아웃</li>
          <li>{searchValues.checkOut}</li>
          <li>오후 02:00</li>
        </ul>
      </Styled.PeriodWrap>
      <Styled.OrderDetails>
        <h2>예약 세부정보</h2>
        <ul>
          <li>{selectedPlaceData.placeName}</li>
          <li>
            {searchValues.checkIn} ~ {searchValues.checkOut}
          </li>
        </ul>
        <ul>
          <li>
            {Number(selectedPlaceData.pricePerDay).toLocaleString()}원 * {period}박
          </li>
          <li>{(Number(selectedPlaceData.pricePerDay) * period).toLocaleString()}원</li>
        </ul>
        <ul>
          <li>인원</li>
          <li>{totalCount}명</li>
        </ul>
        <ul>
          <li>대표자명</li>
          <li>홍길동</li>
        </ul>
      </Styled.OrderDetails>
    </Styled.Container>
  );
}
export default ScheduleDetails;
