import { createContext, useContext, useState} from "react";

const SpotsContext = createContext({
    age: 0,
    pectoral: 0,
    abdomen: 0,
    quadricep: 0
});

export function SpotsProvider({children}){
    const [spots, setSpots] = useState({
        age : 0,
        pectoral: 0,
        abdomen: 0,
        quadricep: 0
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