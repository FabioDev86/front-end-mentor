'use client'

import { useIp } from "@/util/IpContext";
import { useEffect, useState } from "react";

export default function Info(){

    const{ip_address} = useIp();
    const[info, setInfo] = useState({

    });
    
    const fetchData = () => {
        fetch("http://ip-api.com/json/" + ip_address)
          .then((response) => response.json())
          .then((data) => setInfo(data));
    };
    useEffect(() => {
        fetchData();
    }, [ip_address]);

    // Break points: max 950, 
    return(
        <div className="flex border-black max-[950px]:grid max-[950px]:grid-cols-2 max-[660px]:grid-cols-1 z-[1000] divide-x divide-y truncate rounded-lg absolute top-[15rem]">
            <div className="bg-white p-2 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">IP ADDRESS</h1>
                <p className="font-bold text-slate-800 text-2xl">{ip_address}</p>
            </div>
            <div className="bg-white p-2 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">LOCATION</h1>
                <p className="font-bold text-slate-800 text-2xl">{info.city + ", " + info.country}</p>
            </div>
            <div className="bg-white p-2 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">TIMEZONE</h1>
                <p className="font-bold text-slate-800 text-2xl">{info.timezone}</p>
            </div>
            <div className="bg-white p-2 px-[3rem] text-center">
                <h1 className="text-slate-400 font-bold pb-3 text-sm">ISP</h1>
                <p className="font-bold text-slate-800 text-2xl">{info.isp}</p>
            </div>
        </div>
    );
}