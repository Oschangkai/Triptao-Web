import React from "react";
//import Map from "../../map";
import GoogleMap from "google-map-react";
import "./content.less";

const Marker = ({ text }) => <div className="place">{text}</div>;

export default class AdminContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [25.0060863, 121.3251495],
      zoom: 17,
      draggable: true,
      lat: 25.0062605,
      lng: 121.3252949
    };
  }
  onCircleInteraction = (childKey, childProps, mouse) => {
    // function is just a stub to test callbacks
    this.setState({
      draggable: false,
      lat: mouse.lat,
      lng: mouse.lng
    });

    console.log("onCircleInteraction called with", childKey, childProps, mouse);
  };
  onCircleInteraction3 = (childKey, childProps, mouse) => {
    this.setState({ draggable: true });
    // function is just a stub to test callbacks
    console.log("onCircleInteraction called with", childKey, childProps, mouse);
  };
  _onChange = ({ center, zoom }) => {
    this.setState({
      center: center,
      zoom: zoom
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
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          onChildMouseDown={this.onCircleInteraction}
          onChildMouseUp={this.onCircleInteraction3}
          onChildMouseMove={this.onCircleInteraction}
          onChildClick={() => console.log("child click")}
          onClick={() => console.log("mapClick")}
        >
          <Marker text="HI" lat={this.state.lat} lng={this.state.lng} />
        </GoogleMap>
      </div>
    );
  }
}
//<Map width="500" height="500" loc={input => this.getLoc(input)} />;
