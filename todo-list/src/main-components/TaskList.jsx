"use client";
import { useTask } from "@/contexts/TaskContext";
import { useState, useEffect } from "react";

export default function TaskList(){
    
    const[tasklist, setTasklist] = useState([]);
    const {task} = useTask();
    
    useEffect(() =>{            
        setTasklist([...tasklist, task]);    
    }, [task]);    

    const listitem = tasklist.map((item, index) => {
        return(
            <li key={index}>{item}</li>
        );
    });

    return(
        <div>
            <h1>Task List</h1>
            {listitem.length > 0 ?
            <ul>
                {listitem}
            </ul>
            :
            <p>No task</p>
            }
        </div>
    );
}