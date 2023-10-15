'use client'

import { useIp } from "@/util/IpContext";
import { useEffect, useState } from "react";

export default function Info(){

    const{ip_address} = useIp();
    const[info, setInfo] = useState({});
    
    const fetchData = () => {
        fetch("http://ip-api.com/json/" + ip_address)
          .then((response) => response.json())
          .then((data) => setInfo(data));
      };
    useEffect(() => {
        fetchData();
    }, [ip_address]);

    return(
        <div className="flex">
            <div className="bg-white rounded-l-lg p-10 px-[3rem] text-center ">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">IP ADDRESS</h1>
                <p className="font-bold text-slate-800 text-2xl">{ip_address}</p>
            </div>
            <div className="bg-white p-10 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">LOCATION</h1>
                <p className="font-bold text-slate-800 text-2xl">{info.city + ", " + info.regionName}</p>
            </div>
            <div className="bg-white p-10 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">TIMEZONE</h1>
                <p className="font-bold text-slate-800 text-2xl">{info.timezone}</p>
            </div>
            <div className="bg-white rounded-r-lg p-10 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">ISP</h1>
                <p className="font-bold text-slate-800 text-2xl">{info.isp}</p>
            </div>
        </div>
    );
}