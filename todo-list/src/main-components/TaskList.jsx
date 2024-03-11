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
    
    //This will store the type of the list selected by the user. 
    //It will be changed by the buttons: 'All', 'Active' and 'Clear' and passed to the 
    //List component as Prop
    const [type, setType] = useState("general");

    // 'setCompletedTask' from the Context to remove the completed Tasks if the user
    // clicks on 'Clear Completed' button.
    // 'activeTask' from the Context to count and display the remaining active tasks. 
    const {setCompletedTasks, activeTasks, completedTasks} = useTask();

    // This is necessary to prevent Hydration Error after implementing MediaQuery
    if(isClient){
    return(    
        <div>
            {/*This will be rendered on Desktop and Tablet */} 
            <MediaQuery minWidth={501}>
                <List type={type} />
                <div className="flex justify-around bg-white dark:bg-slate-800 rounded-lg p-3 mt-3">
                    <p className="text-gray-400 text-sm">{activeTasks.length} items left</p>
                    <button className={type === "general" ? "text-cyan-500 text-sm": "text-sm text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("general")}}>All</button>
                    <button className={type === "active" ? "text-cyan-500 text-sm": "text-sm text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("active")}}>Active</button>
                    <button className={type === "completed" ? "text-cyan-500 text-sm": " text-sm text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("completed")}}>Completed</button>
                    <button className="text-sm text-gray-400 hover:text-black dark:hover:text-white" onClick={() =>{setCompletedTasks([])}}>Clear Completed</button>  
                </div>
            </MediaQuery>

            {/*This will be rendered on Mobile */}
            <MediaQuery maxWidth={500}>
                <List type={type} /> 
                <div className="flex justify-between bg-white dark:bg-slate-800 rounded-lg p-3 mt-3">
                    <p className="text-gray-400 text-sm">{activeTasks.length} items left</p>
                    <button className="text-sm text-gray-400 hover:text-black dark:hover:text-white" onClick={() =>{setCompletedTasks([])}}>Clear Completed</button>
                </div>
                <div className="flex justify-around mt-5">
                    <button className={type === "general" ? "text-sm text-cyan-500": "text-sm text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("general")}}>All</button>
                    <button className={type === "active" ? "text-sm text-cyan-500": "text-sm text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("active")}}>Active</button>
                    <button className={type === "completed" ? "text-sm text-cyan-500": "text-sm text-gray-400 hover:text-black dark:hover:text-white"} onClick={() => {setType("completed")}}>Completed</button>
                </div>                  
            </MediaQuery>            
        </div>
    ); 
    }       
}