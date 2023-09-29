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

    //If the user selects the general list I return it
    if(props.type === "general"){
        return(
            <div>
                <ul className="bg-white dark:bg-slate-800 border-2 rounded-lg p-1">
                    {tasks.map((item) => {
                        return(
                            <li key={item} className="flex justify-between p-2 border-b-2 text-gray-600 dark:text-gray-300"><div className="flex gap-2"><Checkbox task={item} />{item}</div><RemoveTask task={item} className="justify-self-end"/></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    //If the user selects the active list I return it
    else if(props.type === "active"){
        return(
            <div>
                <ul className="bg-white dark:bg-slate-800 border-2 rounded-lg p-1">
                    {activeTasks.map((item) => {
                        return(
                            <li key={item} className="flex justify-between p-2 border-b-2"><div className="flex gap-2"><Checkbox task={item} />{item}</div><RemoveTask task={item}/></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    //If the user selects the completed list I return it
    else if(props.type === "completed"){
        return(
            <div>
                <ul className="bg-white dark:bg-slate-800 border-2 rounded-lg p-1">
                    {completedTasks.map((item) => {
                        return(
                            <li key={item} className="flex justify-between p-2 border-b-2"><div className="flex gap-2"><Checkbox task={item} />{item}</div><RemoveTask task={item}/></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}