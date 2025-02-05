import { useState } from 'react';
import { MapComponent } from '../../components';
import { ItemCard, InfoSlideCard } from '../../components/pages/home'
import { FaAlignRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import useUserLocation from '../../hooks';
import './styles.css';
import data from '../../dummyData/dummyListVehicles';
import { APIProvider, Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

const API_KEY = 'AIzaSyAJX4SOK0eJEwBht4SuT-WaFRXSL5-gs-8'

const Home = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { location } = useUserLocation();

  return (
    <div className="home-page-container">
      <div className="home-page-left-container">
        <div className='home-page-header'>
          <IoSearch size={30} />
          <FaAlignRight size={30} />
        </div>
        <div className="scroll-container">
          {data?.vehicles?.map((item, i) => <ItemCard item={item} key={i} selected={selectedMarker?.id === item?.id} onSelect={(el) => setSelectedMarker(el)} />)}
        </div>
      </div>
      <APIProvider apiKey={API_KEY}>
        <MapComponent location={location} markers={data} selectedMarker={selectedMarker} onSelectedMarker={(e) => setSelectedMarker(e)} />
      </APIProvider>


      <InfoSlideCard selectedMarker={selectedMarker} />
    </div>
  );
};

export default Home;
