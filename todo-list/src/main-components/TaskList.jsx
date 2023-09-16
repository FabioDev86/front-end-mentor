"use client";
import { useTask } from "@/contexts/TaskContext";

let tasklist = [];

export default function TaskList(){
    
    const {task} = useTask();
    
    tasklist.push(task);
    const listitem = tasklist.map(item => {
        return(
            <li key={item}>{item}</li>
        );
    });

    return(
        <div>
            <h1>Task List</h1>
            <ul>
                {listitem}
            </ul>
        </div>
    );
}