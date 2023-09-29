"use client";

import { useTask } from "@/contexts/TaskContext";
import List from "@/utility-components/List";
import { useState, useEffect } from "react";

import MediaQuery from "react-responsive"; 

export default function TaskList(){    

    // This is necessary to prevent Hydration Error after implementing MediaQuery
    const [isClient, setIsClient] = useState(false) 
    useEffect(() => {
        setIsClient(true)
    }, [])
    
    //This will store the type of the list selected by the user
    const [type, setType] = useState("general");

    // 'setCompletedTask' from the Context to remove the completed Tasks if the user
    // clicks on 'Clear Completed' button.
    // 'activeTask' from the Context to count and display the remaining active tasks. 
    const {setCompletedTasks, activeTasks} = useTask();

    if(isClient){
    return(    
        <div> 
            <MediaQuery minWidth={376}>
                <List type={type} />
                <div className="flex justify-around">
                    <p>{activeTasks.length} items left</p>
                    <button className={type === "general" ? "text-cyan-500": "text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("general")}}>All</button>
                    <button className={type === "active" ? "text-cyan-500": "text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("active")}}>Active</button>
                    <button className={type === "completed" ? "text-cyan-500": "text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("completed")}}>Completed</button>
                    <button className="text-gray-400 hover:text-black dark:hover:text-white" onClick={() =>{setCompletedTasks([])}}>Clear Completed</button>  
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={375}>
                <List type={type} />
                <div>
                    <p>{activeTasks.length} items left</p>
                    <button className="text-gray-400 hover:text-black dark:hover:text-white" onClick={() =>{setCompletedTasks([])}}>Clear Completed</button>
                </div>
                <div className="flex justify-around">
                    <button className={type === "general" ? "text-cyan-500": "text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("general")}}>All</button>
                    <button className={type === "active" ? "text-cyan-500": "text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("active")}}>Active</button>
                    <button className={type === "completed" ? "text-cyan-500": "text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("completed")}}>Completed</button>
                </div>                  
            </MediaQuery>            
        </div>
    ); 
    }       
}