import React from "react";
import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import type { FormData, NearestAirportType } from "./findFlight.types";

type JourneyType = "oneWay" | "roundTrip";

const FindFlightWrapper = ({
  authToken,
  nearestAirportData,
}: {
  authToken: string;
  nearestAirportData: NearestAirportType[] | undefined;
}) => {
  console.log("authToken", authToken);
  const [journeyType, setJourneyType] = useState<JourneyType>("oneWay");
  const [formData, setFormData] = useState<FormData>();

  const handleJourneyTypeChange = (type: JourneyType) => {
    setJourneyType(type);
  };

  const handleFormDataChange = (event: any) => {
    const { name, value } = event.target;
    console.log("here", event);
    if (name == "fromAirport") {
      if (value == formData?.toAirport) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          toAirport: "",
        }));
      }
    } else {
      if (value == formData?.fromAirport) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          fromAirport: "",
        }));
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (name: string, value: Date) => {
    if (name === "fromDate") {
      if (new Date(value) > new Date(formData?.returnDate)) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          returnDate: "",
        }));
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col bg-blue-200 rounded-xl shadow-xl drop-shadow-md justify-start items-start gap-6 p-4 space-x-8">
      <div className="flex gap-4">
        <button
          className={`p-2 ${journeyType === "oneWay" ? "bg-amber-300" : "bg-white"} rounded-xl cursor-pointer`}
          onClick={() => handleJourneyTypeChange("oneWay")}
        >
          One Way
        </button>
        <button
          className={`p-2 ${journeyType === "roundTrip" ? "bg-amber-300" : "bg-white"} rounded-xl cursor-pointer`}
          onClick={() => handleJourneyTypeChange("roundTrip")}
        >
          Round Trip
        </button>
      </div>
      <SearchBox
        nearestAirportData={nearestAirportData}
        journeyType={journeyType}
        handleJourneyTypeChange={handleJourneyTypeChange}
        formData={formData}
        setFormData={setFormData}
        handleFormDataChange={handleFormDataChange}
        handleDateChange={handleDateChange}
      />
    </div>
  );
};

export default FindFlightWrapper;
