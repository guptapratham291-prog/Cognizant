import React, { useState } from "react";
import "./App.css";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>

          <UserPage />
        </>
      ) : (
        <>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>

          <GuestPage />
        </>
      )}
    </div>
  );
}

export default App;