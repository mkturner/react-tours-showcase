import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
  // set up hooks
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // function to remove tour by id, passed down by props
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Handle case where Tours array is empty
  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button className="btn" onClick={() => fetchTours}>Fetch Tours</button>
      </div>
    </main>
  }

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
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
