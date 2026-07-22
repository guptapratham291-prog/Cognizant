import React from "react";
import "./App.css";

function App() {

  const officeSpaces = [
    {
      name: "Tech Park",
      rent: 55000,
      address: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      name: "Business Hub",
      rent: 75000,
      address: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600"
    },
    {
      name: "Corporate Tower",
      rent: 62000,
      address: "Pune",
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
    }
  ];

  return (
    <div className="container">

      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Display Office Spaces */}
      {officeSpaces.map((office, index) => (
        <div className="card" key={index}>

          <img
            src={office.image}
            alt={office.name}
            width="300"
            height="200"
          />

          <h2>{office.name}</h2>

          <p>
            <strong>Rent: </strong>

            <span
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              ₹{office.rent}
            </span>

          </p>

          <p>
            <strong>Address:</strong> {office.address}
          </p>

        </div>
      ))}

    </div>
  );
}

export default App;