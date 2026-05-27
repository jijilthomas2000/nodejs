import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Infocare Full Stack App second second version</h1>

      <p>{data.message}</p>

      <p>{data.db_time}</p>
    </div>
  );
}

export default App;
