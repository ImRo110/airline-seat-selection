import React from "react";
import FlightListCard from "./FlightListCard";
import flightOffers from "./flightOffers.json";

const FlightList = ({ authToken }: { authToken: string }) => {
  interface FlightSummaryProps {
    id: string;
    airlineName: string;
    flightNumber: string;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    stops: number;
    cabin: "ECONOMY" | "BUSINESS" | "FIRST";
    checkedBaggageKg: number;
    cabinBaggageKg: number;
    totalPrice: number | string;
    currency: string;
    carrierCode: string;
  }

  interface AirlineCodeMapping {
    [key: string]: string;
  }

  function finalFlightSummary(
    flightSearchAPIData: FlightSummaryProps
  ): FlightSummaryProps {
    // console.log("here", flightSearchAPIData?.itineraries?.[0]);
    const itinerary = flightSearchAPIData?.itineraries?.[0];
    const segment = itinerary?.segments?.[0];
    const travelerPricing = flightSearchAPIData?.travelerPricings?.[0];
    const fareDetails = travelerPricing?.fareDetailsBySegment?.[0];
    const durationFinal = itinerary?.duration.slice(2);
    const EUR_TO_INR = 105;
    const totalFinalPrice = (
      Number(flightSearchAPIData?.price?.grandTotal) * EUR_TO_INR
    ).toFixed(0);

    const dateProcessing = (data) => {
      return new Date(data).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "Asia/Kolkata",
      });
    };

    const airlineCodeMapping: AirlineCodeMapping = {
      AI: "Air India",
    };

    return {
      id: flightSearchAPIData?.id ?? "",
      airlineName: airlineCodeMapping[segment?.carrierCode] ?? "",
      flightNumber: segment?.number ?? "",
      departureAirport: segment?.departure?.iataCode ?? "",
      arrivalAirport: segment?.arrival?.iataCode ?? "",
      departureTime: dateProcessing(segment?.departure?.at) ?? "",
      arrivalTime: dateProcessing(segment?.arrival?.at) ?? "",
      duration: durationFinal ?? "",
      stops: segment?.numberOfStops ?? 0,
      cabin: fareDetails?.cabin ?? "ECONOMY",
      checkedBaggageKg: fareDetails?.includedCheckedBags?.weight ?? 0,
      cabinBaggageKg: fareDetails?.includedCabinBags?.weight ?? 0,
      totalPrice: totalFinalPrice ?? 0,
      currency: "INR",
    };
  }

  const finalFlightData = flightOffers?.data?.map((item) => {
    // console.log("item", item);
    return finalFlightSummary(item);
  });
  // console.log("finalData", finalFlightData);

  return (
    <div>
      {finalFlightData?.map((item) => {
        return <FlightListCard flightData={item} />;
      })}
    </div>
  );
};

export default FlightList;
