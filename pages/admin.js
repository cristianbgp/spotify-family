import React from "react";
import Head from "next/head";
import fetcher from "./../utils/fetcher";
import useSWR from "swr";
import { SSRSuspense } from "../utils/ssr-suspense";

function PaymentForm() {
  const {
    data: { data: responseFromUsers }
  } = useSWR("https://my-spotify-family-api.herokuapp.com/users", fetcher, {
    suspense: true
  });
  const [userSelected, setUserSelected] = React.useState();
  const [monthSelected, setMonthSelected] = React.useState();

  function handleUser(event) {
    setUserSelected(event.target.value);
  }

  function handleMonth(event) {
    const formattedDate = new Date(event.target.value).toISOString();
    setMonthSelected(formattedDate);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    const payment = {
      userId: userSelected,
      month: monthSelected
    };
    async function requestPosts(payment) {
      await fetch("https://my-spotify-family-api.herokuapp.com/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/vnd.api+json",
          Accept: "application/vnd.api+json"
        },
        body: JSON.stringify({
          data: { type: "payments", attributes: payment }
        })
      });
    }
    requestPosts(payment);
  }

  return (
    <div>
      <Head>
        <title>Spotify Family - Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleOnSubmit}>
        <h2>Create payment</h2>
        <label htmlFor="user">User</label>
        <select name="user" id="user" onChange={handleUser}>
          <option value="">--Select a user--</option>
          {responseFromUsers.map(user => (
            <option key={user.id} value={user.id}>
              {user.attributes.fullName}
            </option>
          ))}
        </select>
        <label htmlFor="month">Month</label>
        <input type="date" onChange={handleMonth} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <SSRSuspense fallback={<p>Loading ...</p>}>
        <PaymentForm />
      </SSRSuspense>
    </div>
  );
}

export default Admin;
