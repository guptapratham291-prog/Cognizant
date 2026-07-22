import React from "react";

function GuestPage() {
  const flights = [
    {
      flightNo: "AI101",
      from: "Delhi",
      to: "Mumbai",
      time: "10:30 AM"
    },
    {
      flightNo: "6E202",
      from: "Bhopal",
      to: "Bangalore",
      time: "2:15 PM"
    },
    {
      flightNo: "UK303",
      from: "Hyderabad",
      to: "Chennai",
      time: "6:45 PM"
    }
  ];

  return (
    <div>
      <h2>Guest Page</h2>
      <p>You can browse available flights.</p>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
            <th>Departure</th>
          </tr>
        </thead>

        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>{flight.flightNo}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><b>Login to book tickets.</b></p>
    </div>
  );
}

export default GuestPage;