import React from "react";

function Tenants() {
  return (
    <div>
      <h1>Tenants Management</h1>
      <p>Manage your tenants here.</p>

      <button>Add Tenant</button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Arun</td>
            <td>arun@gmail.com</td>
            <td>9876543210</td>
          </tr>

          <tr>
            <td>Priya</td>
            <td>priya@gmail.com</td>
            <td>9876543211</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tenants;