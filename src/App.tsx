import React from 'react';
import GalleryPage from './pages/gallery-page';
import TripsPage from './pages/trips-page';

function App() {

  const startDate = new Date(Date.UTC(2020, 8, 20, 0, 0, 0));
  const endDate = new Date(Date.UTC(2020, 8, 30, 3, 0, 0));

  return (
    <div className="App">
      {
        //<GalleryPage city="Tokyo" country="Japon" startDate={startDate} endDate={endDate}  />
      }
      <TripsPage />
    </div>
  );
}

export default App;
