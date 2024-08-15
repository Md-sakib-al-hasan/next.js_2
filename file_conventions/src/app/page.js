// app/page.js

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err);
        // Handle the error by logging it
        fetch('/api/log-error', {
          method: 'POST',
          body: JSON.stringify({ message: err.message }),
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
