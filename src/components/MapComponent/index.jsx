import { Map } from '@vis.gl/react-google-maps';

import PropTypes from 'prop-types';
import Markers from '../Markers/index'
import { Polyline } from '../Polyline/index';
import { POLYGONS } from '../../dummyData/encodedPolygonData';
import './styles.css'

const MAP_ID = '70fa4550f398a1e5'

const MapComponent = ({ location, markers, onSelectedMarker }) => {




    return (

        <div style={{ flex: 1 }}>
            <Map mapId={MAP_ID} gestureHandling={'greedy'}
                disableDefaultUI={true} onClick={() => onSelectedMarker(null)} defaultZoom={10}
                defaultCenter={location} >
                <Markers points={markers?.vehicles} />
                <Polyline encodedPath={POLYGONS[11]} />
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