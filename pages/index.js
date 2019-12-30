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
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem"
        }}
      >
        <h1>Spotify Family</h1>
      </header>
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: 50 }}>
          {responseFromUsers.map(user => (
            <div
              style={{
                minWidth: "max-content",
                padding: "1rem",
                height: 32,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <p key={user.id}>{user.attributes.fullName}</p>
            </div>
          ))}
        </div>
        <SSRSuspense fallback={<p>Loading ...</p>}>
          <Calendar users={responseFromUsers} />
        </SSRSuspense>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <SSRSuspense fallback={<p>Loading ...</p>}>
        <Home />
        <style jsx global>{`
          * {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
        `}</style>
      </SSRSuspense>
    </>
  );
}

export default App;
