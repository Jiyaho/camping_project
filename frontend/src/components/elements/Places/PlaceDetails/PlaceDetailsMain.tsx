import { useParams } from 'next/navigation';
import { OrderSettingBox } from './fragments/OrderSettingBox';
import PlaceInformation from './fragments/PlaceInformation';
import { useRouter } from 'next/navigation';
import { selectedPlaceAtom } from '@/atoms/place';
import { useSetRecoilState } from 'recoil';
import { PlaceDetailDataTypes } from '@/types/place';
import useSWR from 'swr';
import GoToPrevPageButton from '@/components/common/Button/GoToPrevPageButton';

function PlaceDetailsMain() {
  const params = useParams();
  const placeId = params.id;
  const router = useRouter();
  const setSelectedPlaceData = useSetRecoilState(selectedPlaceAtom);
  const { data, isLoading, error } = useSWR<PlaceDetailDataTypes | undefined>(
    `/api/places/${placeId}`,
  );

  if (data) {
    setSelectedPlaceData((prev) => ({
      ...prev,
      placeName: data.facltNm,
      campSite: data.induty,
    }));
  }

  if (error) {
    console.log('Fetch Error: ' + error);
    return <div>Error fetching data</div>;
  }
  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <GoToPrevPageButton text="목록으로" onClick={router.back} />
      <PlaceInformation data={data} />
      <OrderSettingBox />
    </main>
  );
}
export default PlaceDetailsMain;
