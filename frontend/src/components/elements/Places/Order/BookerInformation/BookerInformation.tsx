'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import BookerInputBox from './fragments/BookerInputBox';
import * as Styled from './BookerInformation.styles';
import OrderCompletionModal from '../OrderCompleteModal/OrderCompleteModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userAtom } from '@/atoms/user';
import { useRouter } from 'next/navigation';
import { searchPlaceAtom } from '@/atoms/place';

function BookerInformation() {
  const user = useRecoilValue(userAtom);
  const setSearchValues = useSetRecoilState(searchPlaceAtom);
  const router = useRouter();
  const [name, setName] = useState(user.nickname ?? '');
  const [birthDate, setBirthDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(user.mobile ?? '');
  const [email, setEmail] = useState(user.email ?? '');
  const [paymentInfo, setPaymentInfo] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleBirthDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePaymentInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenModal(true);

    // todo: 예약 정보 서버로 전송
  };

  const closeModal = () => {
    setOpenModal(false);

    // 검색 내역 초기화
    setSearchValues({
      region: null,
      checkIn: null,
      checkOut: null,
      adultNumber: null,
      teenNumber: null,
      childNumber: null,
      petNumber: null,
    });
    router.replace('/');
  };

  return (
    <Styled.Container>
      <h1>예약자 정보</h1>
      <form onSubmit={handleSubmit}>
        <BookerInputBox
          label="이름"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        <BookerInputBox
          label="생년월일"
          type="text"
          id="birthDate"
          value={birthDate}
          onChange={handleBirthDateChange}
        />
        <BookerInputBox
          label="전화번호"
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <BookerInputBox
          label="이메일"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <BookerInputBox
          label="결제정보"
          type="text"
          id="paymentInfo"
          value={paymentInfo}
          onChange={handlePaymentInfoChange}
        />
        <button type="submit">계속</button>
      </form>
      {openModal && <OrderCompletionModal onClose={closeModal} orderNumber="#######" />}
    </Styled.Container>
  );
}
export default BookerInformation;
