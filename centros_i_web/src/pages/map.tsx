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
                    <MarkerF position={center2} onClick={() => setVisible(true)}/>
                </GoogleMap>

            </div>
            <Modal
                className="mainModalArea"
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
                <div uk-slider="center: true">

                <div className="uk-position-relative uk-visible-toggle uk-dark" tabIndex={-1}>

                    <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-4@l uk-child-width-1-4@m uk-grid">
                        <li>
                            <div className="uk-panel">
                                <div className="box-container">
                                <div className="card">
                                        <div className="social">
                                        <a href="" className="uk-icon-link" uk-icon="twitter" ></a>
                                        <a href="" className="uk-icon-link" uk-icon="facebook"></a>
                                        <a href="" className="uk-icon-link" uk-icon="instagram"></a>
                                        <a href="" className="uk-icon-link" uk-icon="behance"></a>
                                        <a href="" className="uk-icon-link" uk-icon="linkedin"></a>
                                        </div>
                                        <div
                                            className="pic"><img src="https://instagram.fcgk6-1.fna.fbcdn.net/vp/b97a5a48c4db220f58e53fd7712b4c4d/5D095A20/t51.2885-15/e35/51588782_245542016328142_2909652747855401869_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net" alt="profile-picture" title="Someone Famous" />
                                        </div>
                                    <div className="content">
                                        <h3 className="title">Dimas Aji</h3><span>Graphic Designer</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <div className="box-container">
                                <div className="card">
                                        <div className="social">
                                        <a href="" className="uk-icon-link" uk-icon="twitter" ></a>
                                        <a href="" className="uk-icon-link" uk-icon="facebook"></a>
                                        <a href="" className="uk-icon-link" uk-icon="instagram"></a>
                                        <a href="" className="uk-icon-link" uk-icon="behance"></a>
                                        <a href="" className="uk-icon-link" uk-icon="linkedin"></a>
                                        </div>
                                        <div
                                            className="pic"><img src="https://instagram.fcgk6-1.fna.fbcdn.net/vp/b97a5a48c4db220f58e53fd7712b4c4d/5D095A20/t51.2885-15/e35/51588782_245542016328142_2909652747855401869_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net" alt="profile-picture" title="Someone Famous" />
                                        </div>
                                    <div className="content">
                                        <h3 className="title">Dimas Aji</h3><span>Graphic Designer</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <div className="box-container">
                                <div className="card">
                                        <div className="social">
                                        <a href="" className="uk-icon-link" uk-icon="twitter" ></a>
                                        <a href="" className="uk-icon-link" uk-icon="facebook"></a>
                                        <a href="" className="uk-icon-link" uk-icon="instagram"></a>
                                        <a href="" className="uk-icon-link" uk-icon="behance"></a>
                                        <a href="" className="uk-icon-link" uk-icon="linkedin"></a>
                                        </div>
                                        <div
                                            className="pic"><img src="https://instagram.fcgk6-1.fna.fbcdn.net/vp/b97a5a48c4db220f58e53fd7712b4c4d/5D095A20/t51.2885-15/e35/51588782_245542016328142_2909652747855401869_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net" alt="profile-picture" title="Someone Famous" />
                                        </div>
                                    <div className="content">
                                        <h3 className="title">Dimas Aji</h3><span>Graphic Designer</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <div className="box-container">
                                <div className="card">
                                        <div className="social">
                                        <a href="" className="uk-icon-link" uk-icon="twitter" ></a>
                                        <a href="" className="uk-icon-link" uk-icon="facebook"></a>
                                        <a href="" className="uk-icon-link" uk-icon="instagram"></a>
                                        <a href="" className="uk-icon-link" uk-icon="behance"></a>
                                        <a href="" className="uk-icon-link" uk-icon="linkedin"></a>
                                        </div>
                                        <div
                                            className="pic"><img src="https://instagram.fcgk6-1.fna.fbcdn.net/vp/b97a5a48c4db220f58e53fd7712b4c4d/5D095A20/t51.2885-15/e35/51588782_245542016328142_2909652747855401869_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net" alt="profile-picture" title="Someone Famous" />
                                        </div>
                                    <div className="content">
                                        <h3 className="title">Dimas Aji</h3><span>Graphic Designer</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <div className="box-container">
                                <div className="card">
                                        <div className="social">
                                        <a href="" className="uk-icon-link" uk-icon="twitter" ></a>
                                        <a href="" className="uk-icon-link" uk-icon="facebook"></a>
                                        <a href="" className="uk-icon-link" uk-icon="instagram"></a>
                                        <a href="" className="uk-icon-link" uk-icon="behance"></a>
                                        <a href="" className="uk-icon-link" uk-icon="linkedin"></a>
                                        </div>
                                        <div
                                            className="pic"><img src="https://instagram.fcgk6-1.fna.fbcdn.net/vp/b97a5a48c4db220f58e53fd7712b4c4d/5D095A20/t51.2885-15/e35/51588782_245542016328142_2909652747855401869_n.jpg?_nc_ht=instagram.fcgk6-1.fna.fbcdn.net" alt="profile-picture" title="Someone Famous" />
                                        </div>
                                    <div className="content">
                                        <h3 className="title">Dimas Aji</h3><span>Graphic Designer</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

                </div>

                <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

                </div>
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