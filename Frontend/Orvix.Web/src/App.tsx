import { useEffect, useState } from "react";

interface HealthResponse {
  application: string;
  status: string;
  version: string;
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://localhost:7296/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }

        return response.json();
      })
      .then((data: HealthResponse) => {
        setHealth(data);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Orvix</h1>

      <h2>API Status</h2>

      {health && (
        <div>
          <p>Application: {health.application}</p>
          <p>Status: {health.status}</p>
          <p>Version: {health.version}</p>
        </div>
      )}

      {error && <p>API Error: {error}</p>}

      {!health && !error && <p>Checking API...</p>}
    </div>
  );
}

export default App;