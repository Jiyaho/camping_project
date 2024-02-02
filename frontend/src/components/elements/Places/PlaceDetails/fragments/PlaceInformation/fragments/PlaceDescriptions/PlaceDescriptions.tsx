'use client';
import { PlaceDetailDataTypes } from '@/types/place';
import * as Styled from './PlaceDescriptions.styles';

interface PlaceDescriptionsProps {
  viewAllImages: boolean;
  placeData: PlaceDetailDataTypes | undefined;
}
function PlaceDescriptions({ viewAllImages, placeData }: PlaceDescriptionsProps) {
  return (
    <Styled.Container style={{ display: viewAllImages ? 'none' : 'block' }}>
      <Styled.Ul>
        <li>{placeData?.facltNm}</li>
        <li>{placeData?.addr1}</li>
        <li>{placeData?.featureNm ? placeData?.featureNm : placeData?.induty}</li>
      </Styled.Ul>
    </Styled.Container>
  );
}
export default PlaceDescriptions;
