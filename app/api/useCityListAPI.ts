import { useState, useEffect } from "react";

interface CityListAPI {
  subType: string;
  keyword?: string;
  countryCode?: string;
}

export default function useCityListAPI(inputKeyword: string) {
  const CITY_SEARCH_URL =
    "https://test.api.amadeus.com/v1/reference-data/locations";

  const queryParams: CityListAPI = {
    subType: "CITY,AIRPORT",
    keyword: inputKeyword,
    countryCode: "IN",
  };

  const queryString = new URLSearchParams(queryParams).toString();
  const finalURL = `${CITY_SEARCH_URL}?${queryString}`;

  const fetchCityListAPI = async () => {
    const response = await fetch(finalURL, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
      },
    });
    const cityListData = await response.json();
    console.log("cityListData", cityListData);
    return cityListData?.data;
  };

  useEffect(() => {
    fetchCityListAPI();
  }, []);
}
