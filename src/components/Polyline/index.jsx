import {
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
} from 'react';

import { GoogleMapsContext, useMapsLibrary } from '@vis.gl/react-google-maps';

function usePolyline(props) {
    const {
        onClick,
        onDrag,
        onDragStart,
        onDragEnd,
        onMouseOver,
        onMouseOut,
        path,
        ...polylineOptions
    } = props;

    const callbacks = useRef({});
    Object.assign(callbacks.current, {
        onClick,
        onDrag,
        onDragStart,
        onDragEnd,
        onMouseOver,
        onMouseOut,
    });

    const geometryLibrary = useMapsLibrary('geometry');
    const polyline = useRef(new google.maps.Polyline()).current;

    useMemo(() => {
        polyline.setOptions(polylineOptions);
    }, [polyline, polylineOptions]);

    const map = useContext(GoogleMapsContext)?.map;

    useMemo(() => {
        if (!path || !geometryLibrary) return;
        polyline.setPath(path);
    }, [polyline, path, geometryLibrary]);

    // create polyline instance and add to the map once the map is available
    useEffect(() => {
        if (!map) {
            if (map === undefined)
                console.error('<Polyline> has to be inside a Map component.');

            return;
        }

        polyline.setMap(map);

        return () => {
            polyline.setMap(null);
        };
    }, [map]);

    // attach and re-attach event-handlers when any of the properties change
    useEffect(() => {
        if (!polyline) return;

        // Add event listeners
        const gme = google.maps.event;
        [
            ['click', 'onClick'],
            ['drag', 'onDrag'],
            ['dragstart', 'onDragStart'],
            ['dragend', 'onDragEnd'],
            ['mouseover', 'onMouseOver'],
            ['mouseout', 'onMouseOut'],
        ].forEach(([eventName, eventCallback]) => {
            gme.addListener(polyline, eventName, (e) => {
                const callback = callbacks.current[eventCallback];
                if (callback) callback(e);
            });
        });

        return () => {
            gme.clearInstanceListeners(polyline);
        };
    }, [polyline]);

    return polyline;
}

/**
 * Component to render a polyline on a map
 */
export const Polyline = forwardRef((props, ref) => {
    const polyline = usePolyline(props);

    useImperativeHandle(ref, () => polyline, []);

    return null;
});
