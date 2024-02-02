import * as Styled from './OrderSettingBox.styles';
import NumberOfVisitor from './fragments/NumberOfVisitor/NumberOfVisitor';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from '@/components/Header/DateRangePicker';
import { SelectedDateRange } from '@/types/date';
import DateDialog from './fragments/DateDialog/DateDialog';
import { periodSelector, searchPlaceAtom, selectedPlaceAtom } from '@/atoms/place';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type DialogTypes = '지역' | '체크인' | '체크아웃' | '인원';

function OrderSettingBox() {
  const params = useParams();
  const searchValues = useRecoilValue(searchPlaceAtom);
  const selectedPlaceData = useRecoilValue(selectedPlaceAtom);
  const period = Number(useRecoilValue(periodSelector));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [startDate, setStartDate] = useState<string | null>(searchValues.checkIn ?? null);
  const [endDate, setEndDate] = useState<string | null>(searchValues.checkOut ?? null);
  const [dialogType, setDialogType] = useState<DialogTypes>();
  const setSearchValues = useSetRecoilState(searchPlaceAtom);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const pricePerDay = Number(selectedPlaceData.pricePerDay);
  const totalPrice = pricePerDay * period;

  const openDialog = (type: DialogTypes) => {
    setDialogType(type);
    setIsDialogOpen(true);
  };

  const handleCheckIn = (dates: SelectedDateRange) => {
    const { startDate, endDate } = dates;
    setStartDate(startDate);
    setEndDate(endDate);

    setDialogType('체크아웃');
  };

  const handleCheckOut = (dates: SelectedDateRange) => {
    const { startDate, endDate } = dates;

    setStartDate(startDate);
    setEndDate(endDate);
  };

  const hideDialog = () => setIsDialogOpen(false);

  const handleOutsideClick = ({ target }: MouseEvent) => {
    if (target === null) {
      return;
    }

    if (!dialogRef.current?.contains(target as Node)) {
      hideDialog();
    }
  };

  const handleReserveButtonClick = () => {
    setSearchValues((prev) => ({
      ...prev,
      checkIn: startDate,
      checkOut: endDate,
    }));

    router.push(`/places/${params.id}/order`);
  };

  useEffect(() => {
    setStartDate(searchValues.checkIn ?? null);
    setEndDate(searchValues.checkOut ?? null);

    document.addEventListener('mouseup', handleOutsideClick);

    return () => document.removeEventListener('mouseup', handleOutsideClick);
  }, [searchValues]);

  return (
    <Styled.Container>
      <Styled.BasicPriceWrap>
        <span>{pricePerDay.toLocaleString()}원</span>
        <span> / 박</span>
      </Styled.BasicPriceWrap>
      <Styled.OptionsContainer>
        <Styled.DateWrap>
          <Styled.DateBox
            $open={isDialogOpen && dialogType === '체크인'}
            onClick={() => openDialog('체크인')}
          >
            <ul>
              <li>체크인</li>
              <li>{startDate ?? '날짜 선택'}</li>
            </ul>
          </Styled.DateBox>
          <Styled.DateBox
            $open={isDialogOpen && dialogType === '체크아웃'}
            onClick={() => openDialog('체크아웃')}
          >
            <ul>
              <li>체크아웃</li>
              <li>{endDate ?? '날짜 선택'}</li>
            </ul>
          </Styled.DateBox>
        </Styled.DateWrap>
        {isDialogOpen && (dialogType === '체크인' || dialogType === '체크아웃') && (
          <DateDialog ref={dialogRef}>
            <DateRangePicker
              isPastDaysRestricted
              checkIn={dialogType === '체크인'}
              onDateSelect={dialogType === '체크인' ? handleCheckIn : handleCheckOut}
              initialSelectedDateRange={{ startDate, endDate }}
            />
          </DateDialog>
        )}
        <NumberOfVisitor />
        <Styled.ReserveButton onClick={handleReserveButtonClick}>예약하기</Styled.ReserveButton>
      </Styled.OptionsContainer>
      <Styled.TextWrap>
        <span>예약 확정 전에는 요금이 청구되지 않습니다.</span>
        <ul>
          <li>
            {pricePerDay.toLocaleString()}원 * {period}박
          </li>
          <li>{totalPrice.toLocaleString()}원</li>
        </ul>
        <ul>
          <li>총 합계</li>
          <li>{totalPrice.toLocaleString()}원</li>
        </ul>
      </Styled.TextWrap>
    </Styled.Container>
  );
}
export default OrderSettingBox;
