import PageLayout from "~/components/PageLayout/PageLayout";
import { useEffect, useState, useMemo, useContext } from "react";
import useCityListAPI from "~/api/useCityListAPI";
import useGetUserCurrentLocation from "~/utils/useLocationFetch";
import useGetNearestAirport from "~/api/useGetNearestAirport";
import nearestAirportData from "../../components/FindFlight/nearestAirportData.json";
import FindFlightWrapper from "~/components/FindFlight/FindFlightWrapper";
import FlightList from "~/components/FlightList/FlightList";
import { AuthContext } from "~/utils/context/AuthContext";
import useGenerateToken from "~/api/useTokenGeneration";

export function Dashboard() {
  const { authToken, setAuthToken } = useContext(AuthContext);

  const {
    generatedToken,
    loading: authTokenLoading,
    fetchAuthToken,
  } = useGenerateToken();

  const fetchToken = async () => {
    if (!authToken) {
      const token = await fetchAuthToken();
      setAuthToken(token ?? "");
    }
  };

  useEffect(() => {
    // if (!USER_LAT || !USER_LONG) {
    //   useGetUserCurrentLocation();
    // } else {
    //   // fetchNearestAirport();
    // }

    if (authToken == null || authToken == undefined) {
      console.log("here");
      fetchToken();

      //   // console.log("token", generatedToken);
      //   // setAuthToken(fetchAuthToken());
      //   // if (!authTokenLoading) {
      //   // }
    }
  }, []);

  const [fetchLocation, setFetchLocation] = useState(false);

  const [USER_LAT, USER_LONG] = useMemo(() => {
    return [
      localStorage.getItem("latitude"),
      localStorage.getItem("longitude"),
    ];
  }, []);

  //
  console.log(authToken);
  return (
    <PageLayout>
      <section className="text-shadow-white p-8 max-w-[1080px]">
        <p className="text-2xl text-left my-3 text-black font-bold">
          <h3>Millions of cheap flights at your fingertips</h3>
        </p>
        <FindFlightWrapper
          nearestAirportData={nearestAirportData}
          authToken={authToken}
        />
        <FlightList authToken={authToken} />
      </section>
    </PageLayout>
  );
}
