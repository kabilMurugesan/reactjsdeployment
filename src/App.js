import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get('http://nodejsserver-257958379.ap-south-1.elb.amazonaws.com/api')
      .then(response => {
        setData(response.data);
        setIsLoading(false);
        setError(null);
      })
      .catch(error => {
        setData(null);
        setIsLoading(false);
        console.log(error, "djdjjd")
        setError('Error fetching data');
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {/* Render your fetched data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>welcome</p>
    </div>

  );
}

export default App;
