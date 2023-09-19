"use client";
import { useTask } from "@/contexts/TaskContext";
import Checkbox from "@/utility-components/Checkbox";
import Image  from "next/image";

export default function TaskList(){    
    
    const {task, setTask} = useTask(); 

    return(
        <div>
            <h1>Task List</h1>
            {task.length > 0  ?
            <ul>
                {task.map((item, index) => {
                    return(
                        <li key={index} className="flex"><Checkbox />{item}<Image src="/icon-cross.svg" alt="cross icon" width={20} height={20} style={{height: '20px'}} /></li>
                    );
                })}
            </ul>
            :
            <p>No task</p>
            }
        </div>
    );
}