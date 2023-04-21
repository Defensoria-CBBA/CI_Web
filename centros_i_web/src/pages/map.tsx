import React from 'react';
import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { Modal, useModal, Button, Text } from "@nextui-org/react";

const containerStyle = {
    width: '100%' ,
    height: '700px',
};


const center = {
    lat: -17.365500, 
    lng: -66.153083
};

const center2 = {
    lat: -18.393802887443847,
    lng: -66.15695989215659
};

function MyComponent() {

    const { setVisible, bindings } = useModal();


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
                    <MarkerF position={center} onClick={() => setVisible(true)}/>
                    <MarkerF position={center2} />
                </GoogleMap>

            </div>
            <Modal
                scroll
                
                blur
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header className="modalTitle">
                <Text id="modal-title" size={18}>
                    Nombre Del Centro
                </Text>
                </Modal.Header>
                <Modal.Body className="modalContainer">
                <Text id="modal-description">
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                    ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                    purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Cras mattis consectetur purus sit amet
                    fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                    quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    
                </Text>
                </Modal.Body>
                <Modal.Footer>
                <Button flat auto color="error" onPress={() => setVisible(false)}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>

        
        
    ) : <></>

}

export default React.memo(MyComponent)