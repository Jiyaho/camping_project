export type PlaceMockData = {
  id: string;
  name: string;
  address: string;
  description: string;
  images?: string[];
  thumbnail: string;
};

export type PlaceDetailDataTypes = {
  addr1: string;
  animalCmgCl: string;
  autoSiteCo: string;
  caravAcmpnyAt: string;
  caravInnerFclty: string;
  caravSiteCo: number;
  doNm: string;
  eqpmnLendCl: string;
  extshrCo: number;
  facltNm: string;
  featureNm: string;
  fireSensorCo: string;
  firstImageUrl: string;
  glamPinnerFclty: null | string;
  glamp_site_co: number;
  homepage: string;
  induty: string;
  intro: string;
  lctCl: string;
  lineIntro: string;
  mapX: string;
  mapY: string;
  operDeCl: string;
  operPdCl: string;
  posblFcltyCl: string;
  resveCl: string;
  resveUrl: string;
  sbrsCl: string;
  sbrsEtc: string;
  sigunguNm: string;
  sitedStnc: string;
  swrmCo: number;
  tel: string;
  themaEnvrnCl: string;
  toiletCo: number;
  tourEraCl: string;
  trlerAcmpnyAt: string;
  wtrplCo: number;
};

export type SearchPlaceTypes = {
  region: string | null;
  checkIn: string | null;
  checkOut: string | null;
  adultNumber: number | null;
  teenNumber: number | null;
  childNumber: number | null;
  petNumber: number | null;
};
