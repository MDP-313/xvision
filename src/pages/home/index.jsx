import { useState } from 'react';
import { APIProvider, Map, Marker, } from '@vis.gl/react-google-maps';
import { ItemCard, InfoSlideCard } from '../../components/pages/home'
import { FaAlignRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import useUserLocation from '../../hooks';
import './styles.css';
import data from '../../dummyData/dummyListVehicles';
import svg from '../../assets/car.svg';
import selectedSvg from '../../assets/selectedSvg.svg'

const API_KEY = 'AIzaSyAJX4SOK0eJEwBht4SuT-WaFRXSL5-gs-8'


const Home = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const { location, error } = useUserLocation();

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
      <div style={{ flex: 1 }}>
        <APIProvider apiKey={API_KEY}>
          <Map onClick={() => setSelectedMarker(null)} defaultZoom={10} gestureHandling={'greedy'}
            disableDefaultUI={true} defaultCenter={location} >
            {data?.vehicles?.map((item) => {
              console.log('item', item)
              return (
                <Marker position={item?.coordinates} key={item?.id} icon={item?.id === selectedMarker?.id ? selectedSvg : svg} onClick={() => setSelectedMarker(item)}>
                </Marker>
              )

            }
            )}
          </Map>
        </APIProvider>
      </div>
      <InfoSlideCard selectedMarker={selectedMarker} />
    </div>
  );
};
export default Home;
