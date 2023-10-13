'use client'

import { createContext, useContext, useState } from "react";

const IpContext = createContext(undefined);

export const IpProvider = ({ children }) => {

  const [ip_address, setIp_address] = useState();
   
  return (
    <IpContext.Provider value={{ip_address, setIp_address}}>
      {children}
    </IpContext.Provider>
  );
};

export const useIp = () => useContext(IpContext);
