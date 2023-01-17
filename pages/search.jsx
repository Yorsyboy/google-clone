import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import Response from "../Response";
import { useRouter } from "next/router";

export default function search({results}) {
  const router = useRouter();
  console.log(results)
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search results </title>
      </Head>

      {/*Search Header */}
      <SearchHeader />

      {/* Search Results */}
      <SearchResults results={results}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const mockData = true
  const data = mockData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CX_KEY
    }&q=${context.query.term}${context.query.searchType && "&searchType=image"}`
  ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
