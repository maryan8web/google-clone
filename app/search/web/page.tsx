import { Data } from "@/app/types/Data";
import React from "react";

const WebSearchPage = async ({
  searchParams,
}: {
  searchParams: { searchTerm: string };
}) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  const data = await response.json();

  const results = data.items;

  return (
    <>{results && results.map((result: Data) => <h1>{result.title}</h1>)}</>
  );
};

export default WebSearchPage;
