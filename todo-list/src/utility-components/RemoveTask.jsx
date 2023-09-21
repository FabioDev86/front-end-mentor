'use client';

import Image from "next/image";
import { useTask } from "@/contexts/TaskContext";

export default function RemoveTask(props){
    
    const{task, setTask, completedTasks, setCompletedTasks, activeTasks, setActiveTasks} = useTask();

    const handleClick = () => {

        //This can be built more efficiently
        const newTaskList = task.filter((item) => {
            return item !== props.task;
        });
        const newCompletedTaskList = completedTasks.filter((item) => {
            return item !== props.task;
        });
        const newActiveTasks = activeTasks.filter((item) => {
            return item !== props.task;
        });
        setTask(newTaskList);
        setCompletedTasks(newCompletedTaskList);
        setActiveTasks(newActiveTasks);
    }

    return(
        <div>
            <Image src="/icon-cross.svg" alt="cross icon" width={20} height={20} style={{height: '20px'}} onClick={handleClick} />
        </div>
    );
} 