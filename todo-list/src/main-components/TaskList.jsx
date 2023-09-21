"use client";

import { useTask } from "@/contexts/TaskContext";
import Checkbox from "@/utility-components/Checkbox";
import RemoveTask from "@/utility-components/RemoveTask";

export default function TaskList(){    
    
    const {task, completedTasks, activeTasks} = useTask(); 

    console.log("Tasks: " + task);
    console.log("Completed Tasks: " + completedTasks);
    console.log("ActiveTasks: " + activeTasks);

    return(
        <div>
            <h1>Task List</h1>
            <ul>
                {task.map((item, index) => {
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