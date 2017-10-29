import React from "react";
//import Map from "../../map";
import GoogleMap from "google-map-react";
import "./map.less";

const Marker = ({ text }) => <div className="place">{text}</div>;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [25.0060863, 121.3251495],
      zoom: 17,
      draggable: true, // Draggable Map
      lat: 25.0062605,
      lng: 121.3252949,
      positions: [
        { lat: 25.0063972, lng: 121.3253326 },
        { lat: 25.0063229, lng: 121.3251877 },
        { lat: 25.0060501, lng: 121.3250198 }
      ]
    };
  }
  markerIsMove = (childKey, childProps, mouse) => {
    this.setState({
      draggable: false, // Set Map draggalbe to false in order to prevent it move with Marker
      lat: mouse.lat,
      lng: mouse.lng
    });
  };
  markerDidMove = (childKey, childProps, mouse) => {
    this.setState({ draggable: true });
    // function is just a stub to test callbacks
    console.log("Marker Did Move", childKey, childProps, mouse);
  };
  _onChange = ({ center, zoom }) => {
    this.setState({
      zoom: zoom
    });
    console.log(this.state);
  };
  posMarker = positions => {
    positions.map(point => {
      console.log(point.lng);
      return (
        <Marker
          text="HI"
          key={point.lng + point.lat}
          lat={point.lat}
          lng={point.lng}
        />
      );
    });
  };
  render() {
    return (
      <div className="gmap">
        <GoogleMap
          draggable={this.state.draggable}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_MAP_KEY
          }}
          onChange={this._onChange}
          center={this.state.center}
          zoom={this.state.zoom}
          onChildMouseDown={this.markerIsMove}
          onChildMouseUp={this.markerDidMove}
          onChildMouseMove={this.markerIsMove}
        >
          {this.props.positions.map(point => {
            return <Marker text="HI" lat={point.lat} lng={point.lng} />;
          })}
          <Marker text="HI" lat={this.state.lat} lng={this.state.lng} />
        </GoogleMap>
      </div>
    );
  }
}
//<Marker text="HI" lat={this.state.lat} lng={this.state.lng} />
// {this.posMarker(this.state.positions)}
