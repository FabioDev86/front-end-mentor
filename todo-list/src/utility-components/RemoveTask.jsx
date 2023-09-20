'use client';

import Image from "next/image";
import { useState } from "react";
import { useTask } from "@/contexts/TaskContext";

export default function RemoveTask(props){
    
    const{task, setTask, completedTasks, setCompletedTasks} = useTask();

    const handleClick = () => {
        const newTaskList = task.slice(0,props.index).concat(task.slice(props.index+1));
        setTask(newTaskList);
    }

    return(
        <div>
            <Image src="/icon-cross.svg" alt="cross icon" width={20} height={20} style={{height: '20px'}} onClick={handleClick} />
        </div>
    );
} 