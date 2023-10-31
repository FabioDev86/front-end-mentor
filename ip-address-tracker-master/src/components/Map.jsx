'use client'

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useIp } from "@/util/IpContext";
import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks';
import L, { icon } from 'leaflet';

function MyComponent(props) {
  const map = useMap();
  try{
    map.flyTo([props.goTo.lat, props.goTo.lon], map.getZoom());
  }
  catch(error){console.log(error)}
  return null
}


export default function Map() {
  const{ip_address} = useIp();
  const[info, setInfo] = useState(); 
  const [lat, setLat] = useState(45.4978);
  const [lon, setLon] = useState(-73.5485);

  const fetchData = () => {
      fetch("http://ip-api.com/json/" + ip_address)
          .then((response) => response.json())
          .then((data) => {setInfo(data); setLat(data.lat); setLon(data.lon)});
  };
  useEffect(() => {
      fetchData();
  }, [ip_address]);

  const myIcon = L.icon({
    iconUrl: 'icon-location.svg',
    iconSize:     [38, 55], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location    
  });

  return(
    
      <MapContainer center={[45.4978, -73.5485]} zoom={13} scrollWheelZoom={false} style={{height: 800, width: "100%"}}>
        {/*MyComponent is used only for the useMap hook in order to change dinamically the view*/}
        <MyComponent goTo = {info} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />      
        <Marker position={[lat, lon]} icon={myIcon}>
        </Marker>
      </MapContainer>    
  );
}