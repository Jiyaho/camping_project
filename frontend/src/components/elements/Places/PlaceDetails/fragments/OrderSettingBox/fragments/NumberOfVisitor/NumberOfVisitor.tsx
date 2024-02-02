import { PeopleDialog } from '@/components/Header/PeopleDialog';
import { useState } from 'react';
import * as Styled from './NumberOfVisitor.styles';
import { useRecoilValue } from 'recoil';
import { searchPlaceAtom } from '@/atoms/place';

function NumberOfVisitor() {
  const searchValues = useRecoilValue(searchPlaceAtom);
  const [adultNumber, setAdultNumber] = useState(searchValues.adultNumber ?? 0);
  const [teenNumber, setTeenNumber] = useState(searchValues.teenNumber ?? 0);
  const [childNumber, setChildNumber] = useState(searchValues.childNumber ?? 0);
  const [petNumber, setPetNumber] = useState(searchValues.petNumber ?? 0);

  return (
    <Styled.Container>
      <h1>인원</h1>
      <Styled.Wrap>
        <Styled.WrapAgeGroup>
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
        </Styled.WrapAgeGroup>
        <Styled.WrapAgeGroup>
          <PeopleDialog
            title="어린이"
            description="만 2세 ~ 12세"
            state={childNumber}
            setStateValue={setChildNumber}
          />
          <PeopleDialog
            title="반려동물"
            description="반려동물을 동반하시나요?"
            state={petNumber}
            setStateValue={setPetNumber}
          />
        </Styled.WrapAgeGroup>
      </Styled.Wrap>
    </Styled.Container>
  );
}
export default NumberOfVisitor;
