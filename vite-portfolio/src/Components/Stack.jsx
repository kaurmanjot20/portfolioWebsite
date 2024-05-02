// stacks.jsx
import { useState, useEffect } from 'react';

function Stack() {
  const [loading, setLoading] = useState(true);
  const [stacks, setstacks] = useState([]);

  useEffect(() => {
    // Simulating fetching data
    setTimeout(() => {
      const fakestacks = [
        { id: 1, name: 'stack 1' },
        { id: 2, name: 'stack 2' },
        { id: 3, name: 'stack 3' },
      ];
      setstacks(fakestacks);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>stacks</h2>
          <ul>
            {stacks.map((stack) => (
              <li key={stack.id}>{stack.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Stack;
