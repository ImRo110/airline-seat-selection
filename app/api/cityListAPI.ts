import { useEffect, useState } from "react";

function getCityListAPI() {
  interface QuoteApiDataType {
    quote: string;
    author: string;
    id: string;
  }
  const API_TIMEOUT = 10000;
  const [quoteData, setQuoteData] = useState<QuoteApiDataType | undefined>();
  const getRandomQuote = async (): Promise<QuoteApiDataType | undefined> => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), API_TIMEOUT);
    try {
      const response = await fetch("https://dummyjson.com/quotes/random", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response?.status}`);
      }
      // console.log("response", response);
      const realQuoteData = (await response.json()) as QuoteApiDataType;
      // console.log(realQuoteData);
      setQuoteData(realQuoteData);
      return realQuoteData;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("You fucked up something", error);
        throw error;
      }
    } finally {
      clearTimeout(id);
    }
  };

  //   useEffect(() => {
  //     getRandomQuote();
  //   }, []);
}
