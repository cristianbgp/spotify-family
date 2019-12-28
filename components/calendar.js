import React from "react";
// Remove when this works from data-fns
import { eachMonthOfInterval } from "./../utils/each-month-of-interval";

const initialDate = new Date(2018, 7);
const finalDate = new Date(2020, 11);

function Calendar() {
  return (
    <div style={{ display: "flex" }}>
      {eachMonthOfInterval({
        start: initialDate,
        end: finalDate
      }).map(date => (
        <div style={{ flexShrink: 0 }}>
          <span style={{ padding: "1rem", background: "#dedede" }}>
            {date.toLocaleString("default", {
              month: "short",
              year: "numeric"
            })}
          </span>
          <div style={{background: "#f2f2f2", height: 500}}>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Calendar;
