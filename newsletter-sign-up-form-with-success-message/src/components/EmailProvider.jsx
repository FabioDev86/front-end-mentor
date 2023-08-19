'use client'
import { createContext, useContext, useState} from "react";

const EmailContext = createContext("");

export const EmailProvider = ({children}) => {    
  
    const [email, setEmail] = useState("");
   
    return (
        <EmailContext.Provider 
            value = {{
                email,
                changeEmail: (data) => setEmail(data)                
            }}
        >
            {children}
        </EmailContext.Provider>
    );

}
export const useEmail = () => useContext(EmailContext);