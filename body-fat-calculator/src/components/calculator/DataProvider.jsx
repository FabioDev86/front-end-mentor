import { createContext, useContext, useState} from "react";

const DataContext = createContext({
    age: 0,
    sex: "m",
    spot1: 0,
    spot2: 0,
    spot3: 0
});

export function DataProvider({children}){
    const [data, setData] = useState({
        age : 0,
        sex : "m",
        spot1: 0,
        spot2: 0,
        spot3: 0
    });
    return (
        <DataContext.Provider 
            value = {{
                data,
                changeData: (value) => setData(value)                
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => useContext(DataContext);