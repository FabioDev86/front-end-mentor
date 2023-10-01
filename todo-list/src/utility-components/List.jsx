"use client";

import { useTask } from "@/contexts/TaskContext";
import Checkbox from "@/utility-components/Checkbox";
import RemoveTask from "@/utility-components/RemoveTask";
import { useEffect, useState } from "react";

export default function List(props){
    
    // Hook to the Context
    const {completedTasks, activeTasks} = useTask(); 
    //This is for combining completed and active tasks lists and displaing them if the user selects 
    //general 
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        //Here I merge the two lists every time there is a change in one of them
        setTasks([...completedTasks, ...activeTasks]);
    }, [activeTasks, completedTasks]);

    //If the user selects the general list I return it
    if(props.type === "general"){
        return(
            <div>
                <ul>
                    {tasks.map((item) => {

                        {/*I have to style the list item differently if item is in active or completed list*/}
                        const classes = activeTasks.includes(item) ? "flex justify-between p-2 bg-white dark:bg-slate-800 border-solid border-2 text-gray-600 dark:text-gray-300" : "flex justify-between p-2 bg-white dark:bg-slate-800 border-b-2 text-gray-300 line-through dark:text-gray-600";

                        {/*I have to style the border differently in relation to the position of the element*/}
                        const border_classes =
                            item === tasks[0] && item === tasks[tasks.length -1] ? "rounded-t-md rounded-b-md" 
                            : item === tasks[tasks.length -1] ? "rounded-b-md" 
                            : item === tasks[0] ? "rounded-t-md"
                            : "";
                        
                        return(
                            <li key={item} className={classes + " " + border_classes}><div className="flex gap-2"><Checkbox task={item} />{item}</div><RemoveTask task={item} className="justify-self-end"/></li>
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
                <ul>
                    {activeTasks.map((item) => {

                        {/*I have to style the list item differently if item is in active or completed list*/}
                        const classes = "flex justify-between p-2 bg-white dark:bg-slate-800 border-solid border-2 text-gray-600 dark:text-gray-300";

                        {/*I have to style the border differently in relation to the position of the element*/}
                        const border_classes =
                            item === activeTasks[0] && item === activeTasks[activeTasks.length -1] ? "rounded-t-md rounded-b-md" 
                            : item === activeTasks[activeTasks.length -1] ? "rounded-b-md" 
                            : item === activeTasks[0] ? "rounded-t-md"
                            : "";

                        return(
                            <li key={item} className={classes + " " + border_classes}><div className="flex gap-2"><Checkbox task={item} />{item}</div><RemoveTask task={item}/></li>
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
                <ul>
                    {completedTasks.map((item) => {
                        
                        {/*I have to style the list item differently if item is in active or completed list*/}
                        const classes = "flex justify-between p-2 bg-white dark:bg-slate-800 border-b-2 text-gray-300 line-through dark:text-gray-600";

                        {/*I have to style the border differently in relation to the position of the element*/}
                        const border_classes =
                            item === completedTasks[0] && item === completedTasks[completedTasks.length -1] ? "rounded-t-md rounded-b-md" 
                            : item === completedTasks[completedTasks.length -1] ? "rounded-b-md" 
                            : item === completedTasks[0] ? "rounded-t-md"
                            : "";
                        
                        return(
                            <li key={item} className={classes + " " + border_classes}><div className="flex gap-2"><Checkbox task={item} />{item}</div><RemoveTask task={item}/></li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}