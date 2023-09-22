"use client";

import { useTask } from "@/contexts/TaskContext";
import Checkbox from "@/utility-components/Checkbox";
import RemoveTask from "@/utility-components/RemoveTask";
import { useEffect, useState } from "react";

export default function TaskList(){    
    
    const {completedTasks, activeTasks} = useTask(); 
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks([...completedTasks, ...activeTasks]);
    }, [activeTasks, completedTasks]);
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
            <h1>Completed Task</h1>
            <ul>
                {completedTasks.map((item, index) => {
                    return(
                        <li key={index} className="flex">{item}<RemoveTask task={item}/></li>
                    );
                })}
            </ul>
            <h1>Active Task</h1>
            <ul>
                {activeTasks.map((item, index) => {
                    return(
                        <li key={index} className="flex">{item}<RemoveTask task={item}/></li>
                    );
                })}
            </ul>

        </div>
    );
}