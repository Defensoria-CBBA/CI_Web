import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%' ,
    height: '700px',
};


const center = {
    lat: -17.393802887443847,
    lng: -66.15695989215659
};

const center2 = {
    lat: -18.393802887443847,
    lng: -66.15695989215659
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
        <div className='containerGrande'>

            <div className='mapFormTitle'>Nuestras Ubiqueishons</div>


            <div className="mapContainer">
            
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onLoad={onLoad}
                onUnmount={onUnmount}
                >
                    <Marker position={center} />
                    <Marker position={center2} />
                </GoogleMap>
            
            </div>
        </div>
        
    ) : <></>

}

export default React.memo(MyComponent)