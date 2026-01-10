import { useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";

interface ShowAirportSuggestion {
  fromAirport: boolean;
  toAirport: boolean;
}

interface NearestAirportType {
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

const SearchBox = ({
  nearestAirportData,
  journeyType,
  handleJourneyTypeChange,
  formData,
  setFormData,
  handleFormDataChange,
  handleDateChange,
}: {
  nearestAirportData: NearestAirportType[] | undefined;
}) => {
  const [showAirportSuggestion, setShowAirportSuggestion] =
    useState<ShowAirportSuggestion>({
      fromAirport: false,
      toAirport: false,
    });

  // useEffect(() => {
  //   if (nearestAirportData) {
  //     // setShowAirportSuggestion();
  //   }
  // }, [nearestAirportData]);
  function handleAPICall() {}

  // console.log(nearestAirportData);
  function handleCitySearch() {
    //call thr city search api
    // console.log("hello");
  }

  function debouncedCitySearch(citySearchFn, debounceTime: number) {
    let timer;
    function originalDebouncedCitySearch(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        // console.log(args);
        citySearchFn.apply(this, args);
      }, debounceTime);
    }

    return originalDebouncedCitySearch;
  }

  const finalDebounceSearch = debouncedCitySearch(handleCitySearch, 400);

  return (
    <div className="flex flex-row justify-between items-center space-x-4">
      <div className="relative">
        <input
          type="text"
          name="fromAirport"
          className="bg-white border-2 rounded-2xl p-2"
          placeholder="Source"
          value={formData?.fromAirport}
          onFocus={() => {
            setShowAirportSuggestion({
              ...showAirportSuggestion,
              fromAirport: true,
              toAirport: false,
            });
          }}
          onChange={(event) => {
            finalDebounceSearch(event);
          }}
        />
        {showAirportSuggestion.fromAirport && (
          <div className="absolute top-12 left-0 flex flex-col gap-2 bg-amber-100 p-2 rounded-xl shadow-xl drop-shadow-md max-h-[250px] overflow-y-scroll scroll">
            {nearestAirportData?.slice(0, 6).map((item) => {
              return (
                <div
                  className="mt-1 flex flex-col gap-1 border-2 p-4 hover:bg-amber-400 rounded-lg cursor-pointer"
                  key={item?.iataCode}
                  onMouseDown={() => {
                    console.log("here2");
                    const event = {
                      target: {
                        name: "fromAirport",
                        value: item?.iataCode,
                      },
                    };
                    handleFormDataChange(event);
                    setShowAirportSuggestion({
                      ...showAirportSuggestion,
                      fromAirport: false,
                    });
                  }}
                >
                  <p className="text-xl">
                    {item.address.cityName} - {item.address.cityCode}
                  </p>
                  <p className="font-semibold"> {item.address.regionCode}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <ArrowRightLeft
        className="flex justify-center items-center hover:bg-amber-100 rounded-4xl cursor-pointer"
        onClick={() => {
          setFormData((prev) => ({
            ...prev,
            fromAirport: formData?.toAirport,
            toAirport: formData?.fromAirport,
          }));
        }}
      />

      <div className="relative">
        <input
          type="text"
          name="toAirport"
          className="bg-white border-2 rounded-2xl p-2"
          placeholder="Destination"
          value={formData?.toAirport}
          onFocus={() => {
            setShowAirportSuggestion({
              ...showAirportSuggestion,
              toAirport: true,
              fromAirport: false,
            });
          }}
        />
        {showAirportSuggestion.toAirport && (
          <div className="absolute top-12 left-0 flex flex-col gap-2 bg-amber-100 p-2 rounded-xl shadow-xl drop-shadow-md max-h-[250px] overflow-y-scroll scroll">
            {nearestAirportData?.slice(0, 6).map((item) => {
              return (
                <div
                  className="mt-1 flex flex-col gap-1 border-2 p-4 hover:bg-amber-400 rounded-lg cursor-pointer"
                  key={item?.iataCode}
                  onMouseDown={() => {
                    console.log("here2");
                    const event = {
                      target: {
                        name: "toAirport",
                        value: item?.iataCode,
                      },
                    };
                    handleFormDataChange(event);
                    setShowAirportSuggestion({
                      ...showAirportSuggestion,
                      toAirport: false,
                    });
                  }}
                >
                  <p className="text-xl">
                    {item.address.cityName} - {item.address.cityCode}
                  </p>
                  <p className="font-semibold"> {item.address.regionCode}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <input
        type="date"
        className="border-2 rounded-xl p-2"
        value={formData?.fromDate}
        min={new Date().toISOString().split("T")[0]}
        onChange={(event) => {
          const date = event.target.value;
          console.log(date);
          handleDateChange("fromDate", date);
        }}
      />
      {journeyType === "roundTrip" && (
        <input
          type="date"
          className="border-2 rounded-xl p-2"
          value={formData?.returnDate}
          min={formData?.fromDate || new Date().toISOString().split("T")[0]}
          onChange={(event) => {
            const date = event.target.value;
            handleDateChange("returnDate", date);
          }}
        />
      )}
    </div>
  );
};

export default SearchBox;
