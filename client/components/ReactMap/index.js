import React from 'react';
import ReactMapboxGl, { Layer, Feature }  from "react-mapbox-gl";

const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1IjoiZGFuaWVsYXRpem9uIiwiYSI6ImNqYTl1a3kxdjBidXYycXFwdDJlYmwzYnMifQ.swnHL_TEYMBPaS7SItug6w' });

export default class ReactMap extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '40vh',
        width: '50vw',
        border: '3px solid black'
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
    </Map>
    );
  }
}
