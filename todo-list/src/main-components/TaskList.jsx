"use client";

import List from "@/utility-components/List";
import { useState } from "react";

export default function TaskList(){    
    
    //This will store the type of the list selected by the user
    const [type, setType] = useState("general");

    return(    
        <>
            <List type={type} />
            <div className="flex justify-around">
                <button onClick={() => {setType("general")}}>All</button>
                <button onClick={() => {setType("active")}}>Active</button>
                <button onClick={() => {setType("completed")}}>Completed</button>
            </div>  
        </>
    );        
}