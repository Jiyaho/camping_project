import { SearchPlaceTypes } from '@/types/place';
import { atom, selector } from 'recoil';

export const searchPlaceAtom = atom<SearchPlaceTypes>({
  key: 'searchPlaceAtom',
  default: {
    region: null,
    checkIn: null,
    checkOut: null,
    adultNumber: null,
    teenNumber: null,
    childNumber: null,
    petNumber: null,
  },
});

export const periodSelector = selector({
  key: 'periodSelector',
  get: ({ get }) => {
    const checkIn = get(searchPlaceAtom).checkIn;
    const checkOut = get(searchPlaceAtom).checkOut;

    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      // 예약 기간 계산
      const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
      const dayDifference = timeDifference / (1000 * 3600 * 24);

      return dayDifference;
    }

    return 0; // Default value if checkIn or checkOut is null
  },
});

export const selectedPlaceAtom = atom({
  key: 'selectedPlaceAtom',
  default: {
    score: 5,
    pricePerDay: 50000,
    placeName: '',
    campSite: '',
  },
});
