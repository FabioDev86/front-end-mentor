import { createContext, useContext, useState} from "react";

const SpotsContext = createContext({
    pectoral: 0,
    abdomen: 0,
    quadriceps: 0
});

export function SpotsProvider({children}){
    const [spots, setSpots] = useState({
        pectoral: 0,
        abdomen: 0,
        quadriceps: 0
    });
    return (
        <SpotsContext.Provider 
            value = {{
                spots,
                changeSpots: (value) => setSpots(value)                
            }}
        >
            {children}
        </SpotsContext.Provider>
    );
}

export const useSpots = () => useContext(SpotsContext);