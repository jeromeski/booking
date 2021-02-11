import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle,
  InfoWindow,
} from 'react-google-maps';
import Cacher from '../../services/cacher';

const MapComponent = (props) => {
  const { coordinates, isError, isLocationLoaded } = props;
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={coordinates}
      center={coordinates}>
      {isLocationLoaded && !isError && (
        <Circle center={coordinates} radius={500} />
      )}
      {isLocationLoaded && isError && (
        <InfoWindow position={coordinates} options={{ maxWidth: 300 }}>
          <div>
            Ooops, something went wrong... Please send a message in the contact
            page for additional information regarding this place. We are sorry
            for the inconvinience.
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const withGeoCode = (WrappedComponent) => {
  
  return class extends React.Component {
    cacher = new Cacher();
    state = {
      coordinates: {
        lat: 0,
        lng: 0,
      },
      isError: false,
      isLocationLoaded: false
    };

    componentDidMount() {
      this.getGeocodedLocation();
    }

    geocodeLocation(location) {      
      const geoCoder = new window.google.maps.Geocoder();

      return new Promise((resolve, reject) => {
        geoCoder.geocode({ address: location }, (result, status) => {
          if (status === 'OK') {
            const geometry = result[0].geometry.location;
            const coordinates = { lat: geometry.lat(), lng: geometry.lng() };
            this.cacher.handleCacheValue(location, coordinates);
            resolve(coordinates);
          } else {
            reject('ERROR!!!');
          }
        });
      });
    }

    getGeocodedLocation() {
      const location = this.props.location;
      if (this.cacher.isValueCached(location)) {
        this.setState({ coordinates: this.cacher.getChachedValue(location), isLocationLoaded: true });
      } else {
        this.geocodeLocation(location)
        .then(
          (coordinates) => {
            this.setState({ coordinates, isLocationLoaded: false });
          },
          (error) => {
            this.setState({
              isError: true, isLocationLoaded: true 
             });
          }
        );
      }
    }
    render() {
      return <WrappedComponent {...this.state} />;
    }
  };
}

export const MapWithGeoCode = withScriptjs(withGoogleMap(withGeoCode(MapComponent)));