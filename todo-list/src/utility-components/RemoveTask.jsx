'use client';

import Image from "next/image";
import { useTask } from "@/contexts/TaskContext";

export default function RemoveTask(props){
    
    const{completedTasks, setCompletedTasks, activeTasks, setActiveTasks} = useTask();

    const handleClick = () =>{
        const newCompletedTaskList = completedTasks.filter((item) => {
            return item !== props.task;
        });
        const newActiveTasks = activeTasks.filter((item) => {
            return item !== props.task;
        });
        setCompletedTasks(newCompletedTaskList);
        setActiveTasks(newActiveTasks);
    }

    return(
        <div>
            <Image src="/icon-cross.svg" alt="cross icon" width={20} height={20} style={{height: '20px'}} onClick={handleClick} />
        </div>
    );
} 