import React from "react";

function IndianPlayers() {

  const players = [
    "Virat",
    "Rohit",
    "Gill",
    "Rahul",
    "Pant",
    "Hardik",
    "Jadeja",
    "Shami"
  ];

  // Destructuring
  const [odd1, even1, odd2, even2, odd3, even3, odd4, even4] = players;

  const oddTeam = [odd1, odd2, odd3, odd4];
  const evenTeam = [even1, even2, even3, even4];

  const T20Players = [
    "Virat",
    "Rohit",
    "Surya",
    "Hardik"
  ];

  const RanjiPlayers = [
    "Sarfaraz",
    "Prithvi Shaw",
    "Pujara",
    "Rahane"
  ];

  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div style={{ margin: "20px" }}>

      <h2>Odd Team Players</h2>

      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>

      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players</h2>

      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

    </div>
  );
}

export default IndianPlayers;