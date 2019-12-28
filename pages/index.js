import React from "react";
import Head from "next/head";
import fetcher from "./../utils/fetcher";
import useSWR from "swr";
import { SSRSuspense } from "../utils/ssr-suspense";
import Calendar from "./../components/calendar";

function Home() {
  const {
    data: { data: responseFromUsers }
  } = useSWR("https://my-spotify-family-api.herokuapp.com/users", fetcher, {
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
        <p key={user.id}>{user.attributes.firstName}</p>
      ))}
      <Calendar />
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
