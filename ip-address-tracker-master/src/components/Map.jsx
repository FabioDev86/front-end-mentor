'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useIp } from "@/util/IpContext";
import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks';

function MyComponent(props) {
  const map = useMap();
  try{
    map.flyTo([props.goTo.lat, props.goTo.lon], map.getZoom())
  }
  catch(error){}
  return null
}


export default function Map() {
  const{ip_address} = useIp();
  const[info, setInfo] = useState(); 

  const fetchData = () => {
      fetch("http://ip-api.com/json/" + ip_address)
          .then((response) => response.json())
          .then((data) => {setInfo(data); console.log(data);});
  };
  useEffect(() => {
      fetchData();
  }, [ip_address]);

  return(
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: 800, width: "100%"}}>
      {/*MyComponent is used only for the useMap hook in order to change dinamically the view*/}
      <MyComponent goTo = {info} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />      
      <Marker position={[51.505, -0.09]}>
      </Marker>
    </MapContainer>
  );
}