import React from "react";
import fetcher from "./../utils/fetcher";
import useSWR from "swr";
import { format, getDate } from "date-fns";
import CheckIcon from "./icons/check";
import CrossIcon from "./icons/cross";
// Remove when this works from data-fns
import { eachMonthOfInterval } from "./../utils/each-month-of-interval";

const initialDate = new Date(2018, 7);
const finalDate = new Date(2020, 11);

function Calendar({ users }) {
  const {
    data: { data: responseFromPayments }
  } = useSWR("https://my-spotify-family-api.herokuapp.com/payments", fetcher, {
    suspense: true
  });

  const numberOfMonthsUntilToday =
    eachMonthOfInterval({
      start: initialDate,
      end: new Date()
    }).length - 1;

  const calendarContainer = React.useRef(null);

  React.useEffect(() => {
    calendarContainer.current.scrollLeft = numberOfMonthsUntilToday * 100;
  }, []);

  return (
    <div style={{ display: "flex", overflowX: "auto" }} ref={calendarContainer}>
      {eachMonthOfInterval({
        start: initialDate,
        end: finalDate
      }).map(date => (
        <div key={date} style={{ flexShrink: 0 }}>
          <p style={{ background: "#dedede", padding: "1rem" }}>
            {date.toLocaleString("default", {
              month: "short",
              year: "numeric"
            })}
          </p>
          {users.map(user => (
            <div key={user.id}>
              {responseFromPayments.find(
                payment =>
                  payment.attributes.month === format(date, "yyyy-MM-dd") &&
                  payment.attributes.userId == user.id
              ) ? (
                <div
                  style={{
                    background: "#65ae64",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <CheckIcon color="white" />
                </div>
              ) : (
                <div
                  style={{
                    background: "#ef3f40",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <CrossIcon color="white" />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
