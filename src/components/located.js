import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const mapStyles = {
  margin: 'auto',
  width: '60%',
  height: '60%',
  border: '5px solid black'
};

const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', width: '50px', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

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
          <Marker onClick={this.onMarkerClick}
                name={'Nino Mufflers and More'}
                title={'The marker`s title will appear as a tooltip.'} 
            />   
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> 
      </Map>      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDeTZGH_xDeS9HAe785sx_1-ygElwiHreQ'
})(MapContainer);

