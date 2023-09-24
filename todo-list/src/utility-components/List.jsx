"use client";

import { useTask } from "@/contexts/TaskContext";
import Checkbox from "@/utility-components/Checkbox";
import RemoveTask from "@/utility-components/RemoveTask";
import { useEffect, useState } from "react";

export default function List(props){
    
    // Hook to the Context
    const {completedTasks, activeTasks} = useTask(); 
    //This is for combining completed and active tasks lists
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        //Here I merge the two lists every time there is a change in one of them
        setTasks([...completedTasks, ...activeTasks]);
    }, [activeTasks, completedTasks]);

    //If the user selected the general list I return it
    if(props.type === "general"){
        return(
            <div>
                <h1>Task List</h1>
                <ul>
                    {tasks.map((item, index) => {
                        return(
                            <li key={index} className="flex"><Checkbox task={item} />{item}<RemoveTask task={item}/></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    //If the user selected the active list I return it
    else if(props.type === "active"){
        return(
            <div>
                <h1>Active Task</h1>
                <ul>
                    {activeTasks.map((item, index) => {
                        return(
                            <li key={index} className="flex"><Checkbox task={item} />{item}<RemoveTask task={item}/></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    //If the user selected the completed list I return it
    else if(props.type === "completed"){
        return(
            <div>
                <h1>Completed Task</h1>
                <ul>
                    {completedTasks.map((item, index) => {
                        return(
                            <li key={index} className="flex"><Checkbox task={item} />{item}<RemoveTask task={item}/></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}