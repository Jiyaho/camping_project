'use client';

import { Header } from '@/components/Header';
import GoToPrevPageButton from '@/components/common/Button/GoToPrevPageButton';
import PageTitle from '@/components/common/Title/PageTitle';
import OrderInformation from '@/components/elements/Places/Order/OrderInformation';
import { prevArrowIcon } from '@/public/svgs';
import { useParams, useRouter } from 'next/navigation';

function BookCampsite() {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <Header />
      <GoToPrevPageButton text="예약하기" onClick={() => router.push(`/places/${params.id}`)} />
      <OrderInformation />
    </>
  );
}
export default BookCampsite;
