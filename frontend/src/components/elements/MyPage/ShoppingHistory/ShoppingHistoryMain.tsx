'use client';

import PurchaseHistory from './PurchaseHistory/PurchaseHistory';
import { ITEMS_HISTORY_END_POINT } from '@/constants/api';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import GoToPrevPageButton from '@/components/common/Button/GoToPrevPageButton';

function ShoppingHistoryMain() {
  const router = useRouter();

  const { data, isLoading, error } = useSWR(ITEMS_HISTORY_END_POINT.ITMES_PURCHASE_HISTORY());

  if (error) {
    console.log('Item Data Fetch Error: ' + error);
    return <div>Error fetching items.</div>;
  }
  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <GoToPrevPageButton text="예약 내역" onClick={() => router.push('/mypage')} />
      <PurchaseHistory data={data} />
    </main>
  );
}
export default ShoppingHistoryMain;
