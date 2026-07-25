import React from "react";

function BookDetails() {
  return (
    <div className="card">
      <h2>Book Details</h2>

      <table>
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Java Programming</td>
            <td>Herbert Schildt</td>
          </tr>

          <tr>
            <td>React Basics</td>
            <td>Jordan Walke</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookDetails;