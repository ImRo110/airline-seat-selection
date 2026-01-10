import {
  Plane,
  Clock,
  Luggage,
  Briefcase,
  ArrowRight,
  MapPin,
} from "lucide-react";

interface FlightSummaryProps {
  flightData: {
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
  };
}

const FlightListCard = ({ flightData }: FlightSummaryProps) => {
  const {
    id,
    airlineName,
    flightNumber,
    departureAirport,
    arrivalAirport,
    departureTime,
    arrivalTime,
    duration,
    stops,
    cabin,
    checkedBaggageKg,
    cabinBaggageKg,
    totalPrice,
    currency,
  } = flightData;

  return (
    <div
      key={id}
      className="bg-white border border-gray-200 rounded-xl p-4 my-5"
    >
      <div className="flex items-center gap-2 text-sm font-bold">
        <Plane />
        <span>
          {airlineName} - {flightNumber}
        </span>
      </div>

      <div className="flex justify-between mt-3 text-sm">
        <div>
          <p className="font-bold">{departureTime}</p>
          <p className="text-gray-500 flex items-center gap-1">
            <MapPin /> {departureAirport}
          </p>
        </div>

        <ArrowRight className="mt-3 text-gray-400" />

        <div className="text-right">
          <p className="font-bold">{arrivalTime}</p>
          <p className="text-gray-500 flex items-center gap-1 justify-end">
            <MapPin /> {arrivalAirport}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-4 text-xs bg-red-400 p-2 rounded-md">
        <div className="flex items-center gap-1">
          <Clock />
          {duration}
        </div>

        <div>{stops == 0 ? "Non-stop" : `${stops} stop(s)`}</div>

        <div>{cabin}</div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1">
            <Luggage /> {checkedBaggageKg} kg
          </span>
          <span className="flex items-center gap-1">
            <Briefcase /> {cabinBaggageKg} kg
          </span>
        </div>

        <div className="font-bold text-lg">
          {currency} {totalPrice}
        </div>
      </div>
    </div>
  );
};

export default FlightListCard;
