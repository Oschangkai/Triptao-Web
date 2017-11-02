import React from "react";
import GoogleMap from "google-map-react";
import "./map.less";

const Marker = ({ text }) => <div className="place">{text}</div>;

export default class Map extends React.Component {
  static defaultProps = {
    positions: []
  };
  constructor(props) {
    super(props);
    this.state = {
      center: [25.001810, 121.327567],
      zoom: 17,
      draggable: true, // Draggable Map
      lat: 25.001810,
      lng:  121.327567
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
    if (childProps.isDraggalbe) {
      this.setState({ draggable: true });
      // function is just a stub to test callbacks
      console.log("Marker Did Move", childKey, childProps, mouse);
    }
  };
  _onChange = ({ center, zoom }) => {
    this.setState({
      zoom: zoom
    });
    console.log(this.state);
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
          {this.props.positions.map((point, index) => {
            return (
              <Marker
                key={index}
                text={index}
                lat={point.lat}
                lng={point.lng}
                isDraggalbe={false}
              />
            );
          })}
          <Marker
            key="999"
            text="奧"
            lat={this.state.lat}
            lng={this.state.lng}
            isDraggalbe={true}
          />
        </GoogleMap>
      </div>
    );
  }
}
//<Marker text="HI" lat={this.state.lat} lng={this.state.lng} />
// {this.posMarker(this.state.positions)}
