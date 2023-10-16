'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useIp } from "@/util/IpContext";
import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet/hooks'

export default function Map() {

    const{ip_address} = useIp();
    const[info, setInfo] = useState();

    const fetchData = () => {
        fetch("http://ip-api.com/json/" + ip_address)
            .then((response) => response.json())
            .then((data) => setInfo(data));
        };
    useEffect(() => {
        fetchData();
    }, [ip_address]);

/*  Devo creare una component da inserire come figlio di MapContainer
    Questo component dovrà avere un qualche tipo di enevent listener in modo da chiamare il metodo 
    setView sull hook useMap().
    Devo capire come creare un evento legato al cambiamento dell'indirizzo ip 
*/
  return(
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: 800, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
      </Marker>
    </MapContainer>
  );
}