import { useEffect, useRef, useState } from 'react';
import {
    useMap,
    Marker,
} from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import PropTypes from 'prop-types';

const Markers = ({ points, onClick, selected }) => {
    const map = useMap();
    const [markers, setMarkers] = useState({});
    const clusterer = useRef(null);

    useEffect(() => {
        if (!map) return;
        if (!clusterer.current) {
            clusterer.current = new MarkerClusterer({ map });
        }
    }, [map]);

    useEffect(() => {
        clusterer.current?.clearMarkers();
        clusterer.current?.addMarkers(Object.values(markers));
    }, [markers]);

    const setMarkerRef = (marker, key) => {
        if (marker && markers[key]) return;
        if (!marker && !markers[key]) return;

        setMarkers((prev) => {
            if (marker) {
                return { ...prev, [key]: marker };
            } else {
                const newMarkers = { ...prev };
                delete newMarkers[key];
                return newMarkers;
            }
        });
    };




    return (
        <>
            {points?.map((point) => (
                <Marker
                    icon={{
                        url: selected?.id === point?.id ? 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                        scaledSize: new window.google.maps.Size(30, 30),
                    }}
                    position={point.coordinates}
                    key={point?.id}
                    ref={(marker) => setMarkerRef(marker, point?.id)}
                    onClick={() => onClick(point)}
                >

                </Marker >
            ))}
        </>
    );
};

Markers.propTypes = {
    points: PropTypes.array,
};

export default Markers;