import React, {useMemo} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import nav from './nav/Nav.module.css'


// type MapsTypeProps = {
//     mapType: google.maps.MapTypeId
//     mapTypeControl?: boolean  он потом использовал useState
// }
// type GoogleLatLng = google.maps.LatLng;
// type GoogleMap = google.maps.Map;

export const Maps = (props: any) => {
    const mapStyles = {
        width: "100%",
        height: "100%",
    };
    const center = useMemo(() => ({lat: 36.721275, lng: -4.421399}), [])
//do not work class .map_wrapper
    return (
        <div className={nav.map_wrapper}>
            {/*<Map*/}
            {/*    google={props.google}*/}
            {/*    zoom={15}*/}
            {/*    style={mapStyles}*/}
            {/*    initialCenter={{lat: 36.721275, lng: -4.421399}}*/}
            {/*>*/}
            {/*    <Marker position={center}/>*/}
            {/*</Map>*/}

            <Map
                google={props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 36.721275, lng: -4.421399 }}
            />
        </div>


    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCM4xh7BwbgFYKxHeblAjvQGgTFjYCNxQA'
})(Maps);