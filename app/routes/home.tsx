import type { Route } from "./+types/home";
import { Dashboard } from "~/pages/Dashboard/Dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Travel Booking Website" },
    {
      name: "description",
      content: "Find the cheapest airline ticket on our app!",
    },
  ];
}

export default function Home() {
  return <Dashboard />;
}
