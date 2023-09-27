"use client";

import { useTask } from "@/contexts/TaskContext";
import List from "@/utility-components/List";
import { useState } from "react";

export default function TaskList(){    
    
    //This will store the type of the list selected by the user
    const [type, setType] = useState("general");

    const {setCompletedTasks} = useTask();

    return(    
        <>
            <List type={type} />
            <div className="flex justify-around">
                <button className={type === "general" ? "text-cyan-500": "text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("general")}}>All</button>
                <button className={type === "active" ? "text-cyan-500": "text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("active")}}>Active</button>
                <button className={type === "completed" ? "text-cyan-500": "text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("completed")}}>Completed</button>
                <div><button className="text-gray-400 hover:text-black dark:hover:text-white" onClick={() =>{setCompletedTasks([])}}>Clear Completed</button></div>
            </div>  
        </>
    );        
}