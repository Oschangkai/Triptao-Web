import React from "react";

export default class Map extends React.Component {
  loadJS = src => {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  };

  componentDidMount() {
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    window.initMap = this.initMap;
    // Asynchronously load the Google Maps script, passing in the callback reference
    this.loadJS(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBoL6nSbKAKIYP0VzHkOzvgUDL701y9sCQ&callback=initMap"
    );
  }
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 25.0062605,
        lng: 121.3252949
      },
      zoom: 17
    });
    this.posMarker(map);
  };

  posMarker = map => {
    const marker = new window.google.maps.Marker({
      position: { lat: 25.0060863, lng: 121.3251495 },
      map: map,
      draggable: true,
      animation: window.google.maps.Animation.DROP      
    });
    window.google.maps.event.addListener(marker, "dragend", () => {
      const val = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
      };
      this.props.loc(val);
    });

    const positions = [
      [25.0063972, 121.3253326],
      [25.0063229, 121.3251877],
      [25.0060501, 121.3250198]
    ];
    var i = undefined;
    for (i = 0; i < positions.length; i++) {
      //var latlng = new window.google.maps.Latlng(positions[i][0],positions[i][1]);
      var m = new window.google.maps.Marker({
        position: {
          lat: positions[i][0],
          lng: positions[i][1]
        },
        map: map,
        animation: window.google.maps.Animation.DROP
      });
    }
  };

  render() {
    return (
      <div>
        <div
          id="map"
          style={{ height: this.props.height, width: this.props.width }}
        />
      </div>
    );
  }
}

// Useage:
// <Map width="500" height="500" loc={input => this.getLoc(input)} />
// getLoc = loc => {
//   this.setState({
//     lat: loc.lat,
//     lng: loc.lng
//   });
//   console.log(loc);
// }
