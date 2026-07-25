import React from "react";

function ListofPlayers() {

  const players = [
    { name: "Virat Kohli", score: 90 },
    { name: "Rohit Sharma", score: 82 },
    { name: "Shubman Gill", score: 76 },
    { name: "KL Rahul", score: 65 },
    { name: "Hardik Pandya", score: 55 },
    { name: "Ravindra Jadeja", score: 72 },
    { name: "Rishabh Pant", score: 68 },
    { name: "Surya Kumar", score: 85 },
    { name: "Kuldeep Yadav", score: 45 },
    { name: "Mohammed Shami", score: 50 },
    { name: "Jasprit Bumrah", score: 78 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div style={{ margin: "20px" }}>
      <h2>List of Players</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Players with Score Below 70</h2>

      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ListofPlayers;