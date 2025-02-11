import { Map } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Markers from '../Markers/index'
import PolylineWithIcons from '../PolylineWithIcons/index'
import './styles.css'

const MAP_ID = '70fa4550f398a1e5'




const MapComponent = ({ location, markers, onSelectedMarker, selectedMarker, tripToShow }) => {
    const [points, setPoints] = useState([])


    const handleSelectedMarker = (selectedVehicle) => {
        onSelectedMarker(selectedVehicle)
    }

    useEffect(() => {
        if (tripToShow) {
            setPoints(null)
            return
        }
        setPoints(markers?.vehicles)
    }, [
        selectedMarker, tripToShow
    ])



    const handleIconClick = (position) => {
    };

    return (

        <div style={{ height: '100%', width: '100%', borderRadius: '10px' }}>
            <Map mapId={MAP_ID} gestureHandling={'greedy'}
                disableDefaultUI={true} onClick={() => onSelectedMarker(null)} defaultZoom={13}
                defaultCenter={location} center={selectedMarker?.coordinates} >
                {tripToShow && <PolylineWithIcons polylinePath={tripToShow?.routeCoordinates} onIconClick={handleIconClick} />}
                {points && <Markers points={points} onClick={(point) => handleSelectedMarker(point)} selected={selectedMarker} />}
            </Map>
        </div >
    )
}

MapComponent.propTypes = {
    location: PropTypes.object,
    selectedMarker: PropTypes.object,
    markers: PropTypes.object,
    onSelectedMarker: PropTypes.func,
    tripToShow: PropTypes.object
}
export default MapComponent;




