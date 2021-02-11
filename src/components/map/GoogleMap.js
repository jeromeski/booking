import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MapComponent = (props) => ((
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
)
);

const withGeoCode = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      alert(this.props.location);
      return <WrappedComponent/>
    }
  }
}

export const MapWithGeoCode = withScriptjs(withGoogleMap(withGeoCode(MapComponent)));