import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
  // set up hooks
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
  };

  const fetchTours = async () => {
    setLoading(true);
    const res = await fetch(url);
    const tours = await fetch.json();
    console.log(tours);
  };;

  // conditional return, if fetching data
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // default return
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
