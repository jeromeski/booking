import React, { Component } from 'react';
import { MapWithGeoCode } from '../../map/GoogleMap';
// import MapWithAMarker from '../../map/GoogleMap';

class RentalMap extends Component {
  render() {
    const googleKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
    const location = this.props.location;
    return (
      <MapWithGeoCode
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
      />
    );
  }
}

export default RentalMap;
