import { Map } from '@vis.gl/react-google-maps';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import Markers from '../Markers/index'
import PolylineWithIcons from '../PolylineWithIcons/index'
import './styles.css'

const MAP_ID = '70fa4550f398a1e5'




const MapComponent = ({ location, markers, onSelectedMarker, selectedMarker, tripToShow }) => {

    const handleSelectedMarker = (selectedVehicle) => {
        onSelectedMarker(selectedVehicle)
    }

    console.log('tripToShow', tripToShow)

    const handleIconClick = (position) => {
    };

    console.log('MapComponent')

    return (

        <div style={{ flex: 1 }}>
            <Map mapId={MAP_ID} gestureHandling={'greedy'}
                disableDefaultUI={true} onClick={() => onSelectedMarker(null)} defaultZoom={10}
                defaultCenter={location} >
                {tripToShow ? <PolylineWithIcons polylinePath={tripToShow?.routeCoordinates} onIconClick={handleIconClick} /> : <Markers points={markers.vehicles} onClick={(point) => handleSelectedMarker(point)} selected={selectedMarker} />
                }

            </Map>
        </div >
    )
}

MapComponent.propTypes = {
    location: PropTypes.object,
    selectedMarker: PropTypes.object,
    markers: PropTypes.object,
    onSelectedMarker: PropTypes.func
}
export default MapComponent;




