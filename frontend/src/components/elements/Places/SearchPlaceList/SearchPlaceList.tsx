import { periodSelector, searchPlaceAtom, selectedPlaceAtom } from '@/atoms/place';
import { placeSampleImg1 } from '@/public/svgs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import * as Styled from './SearchPlaceList.styles';
import React, { useState } from 'react';

type SearchPlacesTypes = {
  id: string;
  firstImageUrl: string;
  facltNm: string;
};

function SearchPlaceList() {
  const searchValues = useRecoilValue(searchPlaceAtom);
  const selectedPlaceData = useRecoilValue(selectedPlaceAtom);
  const period = useRecoilValue(periodSelector);
  const router = useRouter();
  const region = searchValues.region;
  const checkIn = searchValues.checkIn;
  const checkOut = searchValues.checkOut;
  const adult = searchValues.adultNumber;
  const child = searchValues.childNumber;
  const teen = searchValues.teenNumber;
  const pet = searchValues.petNumber;
  const pricePerDay = selectedPlaceData.pricePerDay;
  const totalPrice = period * pricePerDay;
  const score = selectedPlaceData.score;
  const [isHeartClick, setIsHeartClick] = useState(false);

  const queryString = `region=${region}&startDate=${checkIn}&endDate=${checkOut}&page=1&size=10`;

  const { data, isLoading, error } = useSWR<SearchPlacesTypes[]>(`/api/places?${queryString}`);
  const [likeList, setLikeList] = useState(Array(data?.length).fill(false));
  if (error) {
    console.log('Fetch Error: ' + error);
    router.replace('/');
  }
  if (isLoading) return <div>Loading...</div>;

  const stateValue = `region=${region}&startDate=${checkIn}&endDate=${checkOut}&period=${period}&adult=${adult}&child=${child}&teen=${teen}&pet=${pet}&price=${pricePerDay}`;

  const handleHeartIconClick = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsHeartClick(!isHeartClick);
    setLikeList((prev) => {
      const updatedList = [...prev];
      updatedList[index] = !updatedList[index];
      return updatedList;
    });
  };

  return (
    <Styled.Container>
      <Styled.ContentBox>
        {data?.map((item, index) => (
          <Link href={`/places/${item.id}?${stateValue}`} key={item.id}>
            <Styled.ImageWrap>
              <Image
                src={item.firstImageUrl === '' ? placeSampleImg1 : item.firstImageUrl}
                alt="place_image"
                width={270}
                height={270}
              />
              <Styled.HeartIcon
                onClick={handleHeartIconClick(index)}
                $isHeartClick={likeList[index]}
              >
                ♥︎
              </Styled.HeartIcon>
            </Styled.ImageWrap>
            <Styled.TitleWrap>
              <p>{item.facltNm}</p>
              <span>{`★ (${score})`}</span>
            </Styled.TitleWrap>
            <Styled.PriceWrap>
              <p> {`${pricePerDay.toLocaleString()}원 /박`}</p>
              <p>{`총액: ${totalPrice.toLocaleString()}원 (${period}박)`}</p>
            </Styled.PriceWrap>
          </Link>
        ))}
      </Styled.ContentBox>
    </Styled.Container>
  );
}
export default SearchPlaceList;
