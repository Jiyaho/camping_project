'use client';
import GoToPrevPageButton from '@/components/common/Button/GoToPrevPageButton';
import HistoryList from './HistoryList/HistoryList';
import { useRouter } from 'next/navigation';

function ReservationHistoryMain() {
  const router = useRouter();

  return (
    <main>
      <GoToPrevPageButton text="예약 내역" onClick={() => router.push('/mypage')} />
      <HistoryList />
    </main>
  );
}
export default ReservationHistoryMain;
