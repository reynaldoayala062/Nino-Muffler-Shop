import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
// import Markers from './marker'

const mapStyles = {
  width: '100%',
  height: '100%'
};

const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };


export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 29.694330,
            lng: -95.614260
          }
        }
        options={getMapOptions}>
          {/* <Markers
            lat={29.694330}
            lng={-95.614260}
            name="My Marker"
            color="blue"
          /> */}
          <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                title={'The marker`s title will appear as a tooltip.'} />
                
      </Map>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD76iz2_uF_ILLVuWtj58A6LYx7sXfjJck'
})(MapContainer);

