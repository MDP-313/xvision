import { Map } from '@vis.gl/react-google-maps';
import PropTypes from 'prop-types';
import Markers from '../Markers/index'
import PolylineWithIcons from '../PolylineWithIcons/index'
import './styles.css'

const MAP_ID = '70fa4550f398a1e5'




const MapComponent = ({ location, markers, onSelectedMarker, selectedMarker, tripToShow }) => {

    const handleSelectedMarker = (selectedVehicle) => {
        onSelectedMarker(selectedVehicle)
    }



    const handleIconClick = (position) => {
    };





    return (

        <div style={{ height: '100%', width: '100%', borderRadius: '10px' }}>
            <Map mapId={MAP_ID} gestureHandling={'greedy'}
                disableDefaultUI={true} onClick={() => onSelectedMarker(null)} defaultZoom={10}
                defaultCenter={location} >
                {tripToShow && <PolylineWithIcons polylinePath={tripToShow?.routeCoordinates} onIconClick={handleIconClick} />}
                <Markers points={markers?.vehicles} onClick={(point) => handleSelectedMarker(point)} selected={selectedMarker} />
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




