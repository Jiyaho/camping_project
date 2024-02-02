'use client';
import GoToPrevPageButton from '@/components/common/Button/GoToPrevPageButton';
import { useRouter } from 'next/navigation';

function EventHistoryMain() {
  const router = useRouter();

  return (
    <main>
      <GoToPrevPageButton text="이벤트 내역" onClick={() => router.push('/mypage')} />
      EventHistoryPage
    </main>
  );
}
export default EventHistoryMain;
