import React from "react";
import Head from "next/head";
import fetcher from "./../utils/fetcher";
import useSWR from "swr";
import { SSRSuspense } from "../utils/ssr-suspense";

Home.getInitialProps = async () => {
  const users = await fetcher(
    "https://my-spotify-family-api.herokuapp.com/users"
  );
  return { users };
};

function Home({ users }) {
  const {
    data: { data: responseFromUsers }
  } = useSWR("https://my-spotify-family-api.herokuapp.com/users", fetcher, {
    initialData: users,
    suspense: true
  });

  return (
    <div>
      <Head>
        <title>Spotify Family</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Spotify Family</h1>
      {responseFromUsers.map(user => (
        <p>{user.attributes.firstName}</p>
      ))}
    </div>
  );
}

function App() {
  return (
    <SSRSuspense fallback={<p>Loading ...</p>}>
      <Home />
    </SSRSuspense>
  );
}

export default App;
