import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '500px',
    height: '500px',
};

const center = {
    lat: 40.748817,
    lng: -73.985428
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBM22sT9p3ffZPTeSEa9g89IprkG16Yjcg"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div className='mapContainer' >
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
            { /* Child components, such as markers, info windows, etc. */ }
        
            </GoogleMap>
        </div>
    ) : <></>

}

export default React.memo(MyComponent)