import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users") // Proxy via Nginx
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>🚀 DevOps Demo App</h1>
      <ul>
        {users.map((u, i) => <li key={i}>{u.name} - {u.role}</li>)}
      </ul>
    </div>
  );
}

export default App;

