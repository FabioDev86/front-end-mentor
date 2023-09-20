"use client";
import { useTask } from "@/contexts/TaskContext";
import Checkbox from "@/utility-components/Checkbox";
import RemoveTask from "@/utility-components/RemoveTask";
import Image  from "next/image";

export default function TaskList(){    
    
    const {task, setTask, completedTasks} = useTask(); 

    return(
        <div>
            <h1>Task List</h1>
            {task.length > 0  ?
            <ul>
                {task.map((item, index) => {
                    return(
                        <li key={index} className="flex"><Checkbox index={index} />{item}<RemoveTask index={index}/></li>
                    );
                })}
            </ul>
            :
            <p>No task</p>
            }
        </div>
    );
}