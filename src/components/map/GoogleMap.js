import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle,
} from 'react-google-maps';
import Cacher from '../../services/cacher';

const MapComponent = (props) => {
  const { coordinates } = props;
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={coordinates}
      center={coordinates}>
      <Circle center={coordinates} radius={500} />
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
    };

    componentDidMount() {
      this.getGeocodedLocation();
    }

    geocodeLocation() {
      const { location } = this.props;
      const geoCoder = new window.google.maps.Geocoder();

      return new Promise ((resolve, reject) => {
        geoCoder.geocode({ address: location }, (result, status) => {
          if (status === 'OK') {
            const geometry = result[0].geometry.location;
            const coordinates = { lat: geometry.lat(), lng: geometry.lng() };
            this.cacher.handleCacheValue(location, coordinates);
            resolve(coordinates)
          } else {
            reject('ERROR!!!')
          }
        });
      })
    }

    getGeocodedLocation() {
      const location = this.props.location;
      if  (this.cacher.isValueCached(location)) {
        this.setState({  coordinates: this.cacher.getChachedValue(location)  });;
      } else {
        this.geocodeLocation(location)
          .then(
            (coordinates) => {
              this.setState({coordinates});
            },
            (error) => {
              console.log(error)
            });
      }
    }
    render() {
      return <WrappedComponent {...this.state} />;
    }
  };
}

export const MapWithGeoCode = withScriptjs(withGoogleMap(withGeoCode(MapComponent)));