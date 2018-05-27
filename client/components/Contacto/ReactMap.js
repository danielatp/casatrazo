// https://github.com/alex3165/react-mapbox-gl

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
          width: '100%',
          border: '3px solid black'
        }}
        center={[-77.0272688, -12.1255775]}
        zoom={[13]}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-77.0272688, -12.1255775]}/>
        </Layer>
    </Map>
    );
  }
}
