'use client';

import { useEffect, useRef, useState } from 'react';
import { SearchBarDialog } from '../SearchBarDialog';
import { DateRangePicker } from '../DateRangePicker';
import { RegionTypes } from '@/types/region';
import { SelectedDateRange } from '@/types/date';
import {
  Box,
  Content,
  DialogContainer,
  DialogTitle,
  InputBox,
  SearchBarContainer,
  SearchIconBox,
  Title,
} from './Searchbar.style';
import { RegionDialog } from '../RegionDialog';
import { PeopleDialog } from '../PeopleDialog';
import { SearchIcon } from '@/public/svgs';
import Image from 'next/image';
import { searchPlaceAtom } from '@/atoms/place';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

type DialogTypes = '지역' | '체크인' | '체크아웃' | '인원';

export default function SearchBar() {
  const searchValues = useRecoilValue(searchPlaceAtom);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [region, setRegion] = useState<string | null>(searchValues.region ?? null);
  const [startDate, setStartDate] = useState<string | null>(searchValues.checkIn ?? null);
  const [endDate, setEndDate] = useState<string | null>(searchValues.checkOut ?? null);
  const [dialogType, setDialogType] = useState<DialogTypes>();

  const [adultNumber, setAdultNumber] = useState<number>(searchValues.adultNumber ?? 0);
  const [teenNumber, setTeenNumber] = useState<number>(searchValues.teenNumber ?? 0);
  const [childNumber, setChildNumber] = useState<number>(searchValues.childNumber ?? 0);
  const [petNumber, setPetNumber] = useState<number>(searchValues.petNumber ?? 0);
  const totalNumber = adultNumber + teenNumber + childNumber + petNumber;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const setSearchValues = useSetRecoilState(searchPlaceAtom);

  const router = useRouter();

  const openDialog = (type: DialogTypes) => {
    setDialogType(type);
    setIsDialogOpen(true);
  };

  const handleRegion = (region: RegionTypes) => {
    setRegion(region);
  };

  const handleCheckIn = (dates: SelectedDateRange) => {
    const { startDate, endDate } = dates;
    setStartDate(startDate);
    setEndDate(endDate);
    setDialogType('체크아웃');
  };

  const handleSubmit = () => {
    if (!region) {
      alert('지역을 선택해주세요!');
    } else if (!startDate) {
      alert('체크인 날짜를 선택해주세요!');
    } else if (!endDate) {
      alert('체크아웃 날짜를 선택해주세요!');
    } else if (totalNumber === 0) {
      alert('인원을 선택해주세요!');
    } else {
      // 리코일 상태 업데이트
      setSearchValues({
        region: region,
        checkIn: startDate,
        checkOut: endDate,
        adultNumber,
        teenNumber,
        childNumber,
        petNumber,
      });

      router.push('/places'); // 검색 결과 페이지로 이동
    }
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

  useEffect(() => {
    document.addEventListener('mouseup', handleOutsideClick);

    return () => document.removeEventListener('mouseup', handleOutsideClick);
  }, [searchValues]);

  return (
    <div style={{ width: '60%' }}>
      <SearchBarContainer>
        <InputBox $open={isDialogOpen && dialogType === '지역'} onClick={() => openDialog('지역')}>
          <div>
            <Title>지역</Title>
            <Content>{region ?? '지역 선택'}</Content>
          </div>

          {isDialogOpen && dialogType === '지역' && (
            <SearchBarDialog ref={dialogRef}>
              <DialogContainer>
                <DialogTitle>지역으로 검색하기</DialogTitle>
                <RegionDialog onRegionSelect={handleRegion} />
              </DialogContainer>
            </SearchBarDialog>
          )}
        </InputBox>
        <InputBox
          $open={isDialogOpen && dialogType === '체크인'}
          onClick={() => openDialog('체크인')}
        >
          <div>
            <Title>체크인</Title>
            <Content>{startDate ?? '날짜 선택'}</Content>
          </div>
        </InputBox>
        <InputBox
          $open={isDialogOpen && dialogType === '체크아웃'}
          onClick={() => openDialog('체크아웃')}
        >
          <div>
            <Title>체크아웃</Title>
            <Content>{endDate ?? '날짜 선택'}</Content>
          </div>
        </InputBox>
        <InputBox $open={isDialogOpen && dialogType === '인원'} onClick={() => openDialog('인원')}>
          <div>
            <Title>인원</Title>
            <Content>{totalNumber === 0 ? '인원 선택' : `총 ${totalNumber} 명`}</Content>
          </div>
        </InputBox>
        <SearchIconBox onClick={handleSubmit}>
          <Image src={SearchIcon} alt={'search'} width={32} height={32} />
        </SearchIconBox>
        {isDialogOpen && dialogType === '인원' && (
          <SearchBarDialog ref={dialogRef} style={{ position: 'absolute', right: '-150px' }}>
            <DialogContainer>
              <DialogTitle>인원 선택</DialogTitle>
              <Box>
                <PeopleDialog
                  title="성인"
                  description="만 19세 이상"
                  state={adultNumber}
                  setStateValue={setAdultNumber}
                />
                <PeopleDialog
                  title="청소년"
                  description="만 13세 이상"
                  state={teenNumber}
                  setStateValue={setTeenNumber}
                />
                <PeopleDialog
                  title="어린이"
                  description="만 2세 ~ 12세"
                  state={childNumber}
                  setStateValue={setChildNumber}
                />
                <PeopleDialog
                  title="반려동물"
                  description="반려 동물을 동반하시나요?"
                  state={petNumber}
                  setStateValue={setPetNumber}
                />
              </Box>
            </DialogContainer>
          </SearchBarDialog>
        )}
      </SearchBarContainer>
      {isDialogOpen && (dialogType === '체크인' || dialogType === '체크아웃') && (
        <SearchBarDialog ref={dialogRef}>
          <DateRangePicker
            isPastDaysRestricted
            checkIn={dialogType === '체크인'}
            onDateSelect={dialogType === '체크인' ? handleCheckIn : handleCheckOut}
            initialSelectedDateRange={{ startDate, endDate }}
          />
        </SearchBarDialog>
      )}
    </div>
  );
}
