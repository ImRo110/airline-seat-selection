type JourneyType = "oneWay" | "roundTrip";

export interface FormData {
  journeyType: JourneyType;
  fromAirport: string;
  toAirport: string;
  fromDate: string;
  returnDate?: string;
}

export interface NearestAirportType {
  address: {
    cityName: string;
    cityCode: string;
    countryName: string;
    countryCode: string;
    stateCode: string;
    regionCode: string;
  };
  distance: {
    value: number;
    unit: string;
  };
  geoCode: {
    latitude: number;
    longitude: number;
  };
  iataCode: string;
  name: string;
  subType: string;
  type: string;
  detailedName: string;
  timeZoneOffset: string;
}
