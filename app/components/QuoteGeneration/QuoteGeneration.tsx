import PageLayout from "~/components/PageLayout/PageLayout";
import { useEffect, useState, useMemo } from "react";
import useCityListAPI from "~/api/useCityListAPI";
import useGetUserCurrentLocation from "~/utils/useLocationFetch";
import useGetNearestAirport from "~/api/useGetNearestAirport";
import nearestAirportData from "../../components/FindFlight/nearestAirportData.json";
import FindFlightWrapper from "~/components/FindFlight/FindFlightWrapper";
import FlightList from "~/components/FlightList/FlightList";
import { AuthProvider } from "~/utils/context/AuthContext";

// interface QuoteApiDataType {
//   quote: string;
//   author: string;
//   id: string;
// }

export function Dashboard() {
  // const [quoteData, setQuoteData] = useState<QuoteApiDataType | undefined>();
  const [USER_LAT, USER_LONG] = useMemo(() => {
    return [
      localStorage.getItem("latitude"),
      localStorage.getItem("longitude"),
    ];
  }, []);

  // console.log(USER_LAT, USER_LONG);

  // const {
  //   data: nearestAirportData,
  //   loading: nearestAirportLoading,
  //   fetchNearestAirport,
  // } = useGetNearestAirport(USER_LAT, USER_LONG);

  // const getRandomQuote = async (): Promise<QuoteApiDataType | undefined> => {
  //   const controller = new AbortController();
  //   const id = setTimeout(() => controller.abort(), API_TIMEOUT);
  //   try {
  //     const response = await fetch("https://dummyjson.com/quotes/random", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       signal: controller.signal,
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP Error: ${response?.status}`);
  //     }
  //     // console.log("response", response);
  //     const realQuoteData = (await response.json()) as QuoteApiDataType;
  //     // console.log(realQuoteData);
  //     setQuoteData(realQuoteData);
  //     return realQuoteData;
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       console.log("You fucked up something", error);
  //       throw error;
  //     }
  //   } finally {
  //     clearTimeout(id);
  //   }
  // };

  useEffect(() => {
    // getRandomQuote();
    if (!USER_LAT || !USER_LONG) {
      useGetUserCurrentLocation();
      // console.log("here");
    } else {
      // fetchNearestAirport();
    }
  }, []);

  // console.log(nearestAirportData);

  // const cityData = useCityListAPI("nagpur");
  //
  return (
    <PageLayout>
      <section className="text-shadow-white p-8 max-w-[1080px]">
        {/* {quoteData && (
          <>
            <p
              className="text-2xl text-center font-bold"
              style={{
                WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "red",
                background:
                  "linear-gradient(209deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 10%, rgba(0, 212, 255, 1) 100%)",
              }}
            >
              {quoteData?.quote}
            </p>
            <h2 className="text-center"> By - {quoteData?.author}</h2>
          </>
        )}
        <p className="text-2xl text-left my-3 text-black font-bold">
          <h3>Millions of cheap flights at your fingertips</h3>
        </p> */}
        <FindFlightWrapper nearestAirportData={nearestAirportData} />
        <FlightList />
      </section>
    </PageLayout>
  );
}
