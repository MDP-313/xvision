import { useState, useEffect } from 'react';
import { MapComponent } from '../../components';
import { ItemCard, InfoSlideCard } from '../../components/pages/home'
import { FaAlignRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import './styles.css';
import data from '../../dummyData/dummyListVehicles';
import { APIProvider } from '@vis.gl/react-google-maps';
import Timeline from '../../components/Timeline';

const API_KEY = 'AIzaSyAJX4SOK0eJEwBht4SuT-WaFRXSL5-gs-8'

const Home = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setError("Unable to retrieve location.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);


  const handleSelectedMarker = (selectedVehicle) => {
    if (selectedVehicle?.id === selectedMarker?.id) return
    setSelectedMarker(selectedVehicle)
    setSelectedTrip(null)
  }




  const activities = [
    { start: "02:35:00", end: "04:30", },
    { start: "08:15", end: "10:00" },
    { start: "14:00", end: "16:45" },
    { start: "20:30", end: "22:15" },
  ];





  return (

    <div className="home-page-container">
      <div className="home-page-left-container">
        <div className='home-page-header'>
          <IoSearch size={30} />
          <FaAlignRight size={30} />
        </div>
        <div className="scroll-container">
          {data?.vehicles?.map((item, i) => <ItemCard item={item} key={i} selected={selectedMarker?.id === item?.id} onSelect={(el) => handleSelectedMarker(el)} />)}
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {!location && !error && <p>Loading location...</p>}

      <div className='map-container'>
        <APIProvider apiKey={API_KEY}>
          {location && <MapComponent tripToShow={selectedTrip} location={location} markers={!selectedTrip ? data : null} selectedMarker={selectedMarker} onSelectedMarker={(e) => setSelectedMarker(e)} />}
        </APIProvider>
        <div className='timeline-container'>
          <Timeline activities={activities} />
        </div>
      </div>

      <InfoSlideCard selectedMarker={selectedMarker} onSelectedTrip={(trip) => setSelectedTrip(trip)} />

    </div >

  );
};

export default Home;
