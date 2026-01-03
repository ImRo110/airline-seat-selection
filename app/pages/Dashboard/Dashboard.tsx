import PageLayout from "~/components/PageLayout/PageLayout";
import { useEffect, useState } from "react";
import SearchBox from "~/components/SearchBox/SearchBox";

export function Dashboard() {
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

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <PageLayout>
      <section className="text-shadow-white p-8">
        {quoteData && (
          <>
            <p
              className="text-2xl text-center font-bold"
              style={{
                // "-webkit-background-clip": "text",
                // "-webkit-text-fill-color": "transparent",
                color: "red",
                // background:
                //   "linear-gradient(209deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 10%, rgba(0, 212, 255, 1) 100%)",
              }}
            >
              {quoteData?.quote}
            </p>
            <h2 className="text-center"> By - {quoteData?.author}</h2>
            <SearchBox />
          </>
        )}
      </section>
    </PageLayout>
  );
}
