import { useState, useEffect } from "react";

function useGetNearestAirport() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const NEAREST_AIRPORT_URL =
    "https://test.api.amadeus.com/v1/reference-data/locations/airports";

  const queryParams = {
    latitude: localStorage.getItem("latitude"),
    longitude: localStorage.getItem("longitude"),
  };

  const queryString = new URLSearchParams(queryParams).toString();
  const finalURL = `${NEAREST_AIRPORT_URL}?${queryString}`;

  const fetchNearestAirport = async () => {
    setLoading(true);
    try {
      const response = await fetch(finalURL, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
        },
      });
      const nearestAirportData = await response.json();
      console.log("nearestAirportData", nearestAirportData);
      setData(nearestAirportData?.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchNearestAirport };

  //   useEffect(() => {
  //     fetchNearestAirport();
  //   }, []);
}

export default useGetNearestAirport;
