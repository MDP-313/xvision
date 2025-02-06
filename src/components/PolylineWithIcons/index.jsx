import { useState, useEffect, useCallback } from 'react';
import { Marker, InfoWindow } from '@vis.gl/react-google-maps';
import { Polyline } from '../Polyline/index';
import PropTypes from 'prop-types';

const PolylineWithIcons = ({ polylinePath, onIconClick }) => {
    const [iconPositions, setIconPositions] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);


    useEffect(() => {
        if (!polylinePath || polylinePath.length < 2) return;


        let newIconPositions = [];
        for (let i = 0; i < polylinePath.length - 1; i++) {
            const midLat = (polylinePath[i].lat + polylinePath[i + 1].lat) / 2;
            const midLng = (polylinePath[i].lng + polylinePath[i + 1].lng) / 2;

            newIconPositions.push({ lat: midLat, lng: midLng });
        }

        setIconPositions(newIconPositions);
    }, [polylinePath]);


    const handleMarkerClick = useCallback((position) => {
        setSelectedMarker(position);
        onIconClick(position);
    }, [onIconClick]);

    const handleClose = useCallback(() => setSelectedMarker(null), []);

    return (
        <>

            <Polyline
                path={polylinePath}
                options={{
                    // icons: [{
                    //     icon: {
                    //         path: 'M -2,0 0,-2 2,0 0,2 z',
                    //         strokeColor: "#7e1790",
                    //         fillColor: '#fff',
                    //         fillOpacity: 1,
                    //         scale: 3.5,
                    //     },
                    //     offset: "100%",
                    //     repeat: "100px",
                    // }],
                    geodesic: true,
                    strokeColor: "#7e1790",
                    strokeOpacity: 1,
                    strokeWeight: 5,
                }}
            />

            {iconPositions.map((position, index) => (
                <Marker
                    key={index}
                    position={position}
                    onClick={() => handleMarkerClick(position)}
                    icon={{
                        path: google.maps.SymbolPath.CIRCLE,
                        strokeColor: "#7e1790",
                        fillColor: '#fff',
                        fillOpacity: 1,
                        scale: 4.5,
                    }}
                />
            ))}
            {selectedMarker && (
                <InfoWindow position={selectedMarker} onClose={handleClose}>
                    <div>
                        <h2>InfoWindow Content</h2>
                        <p>Marker at: {selectedMarker.lat}, {selectedMarker.lng}</p>
                    </div>
                </InfoWindow>
            )}

        </>
    );
};


PolylineWithIcons.propTypes = { polylinePath: PropTypes.array, onIconClick: PropTypes.func };


export default PolylineWithIcons;