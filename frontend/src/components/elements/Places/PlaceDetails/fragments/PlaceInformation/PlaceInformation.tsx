'use client';
import { useState } from 'react';
import PlaceDescriptions from './fragments/PlaceDescriptions/PlaceDescriptions';
import PlaceImagesModal from './fragments/PlaceImagesModal/PlaceImagesModal';
import * as Styled from './PlaceInformation.styles';
import Image from 'next/image';
import { mockCampImages } from '@/mocks/data/defaultPlaceImages';
import { PlaceDetailDataTypes } from '@/types/place';

function PlaceInformation({ data }: { data: PlaceDetailDataTypes | undefined }) {
  const [viewAllImages, setViewAllImages] = useState(false);

  // 사진 모두 보기 클릭한 경우 Modal Open
  const openModal = () => setViewAllImages(true);
  const closeModal = () => setViewAllImages(false);

  // 캠핑장 대표 이미지 3개만 출력
  const mainImages = mockCampImages.slice(0, 3);

  return (
    <Styled.Container>
      <Styled.ImagesWrap onClick={openModal}>
        {mainImages.map((image, i) => (
          <Image src={image} alt="place_image" width={0} height={0} key={i} priority />
        ))}
        <Styled.Button onClick={openModal}>사진 모두 보기</Styled.Button>
      </Styled.ImagesWrap>
      {viewAllImages && <PlaceImagesModal images={mockCampImages} closeModal={closeModal} />}
      <PlaceDescriptions viewAllImages={viewAllImages} placeData={data} />
    </Styled.Container>
  );
}

export default PlaceInformation;
